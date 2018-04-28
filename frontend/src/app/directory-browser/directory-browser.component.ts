import { Component, OnInit, OnDestroy } from '@angular/core';
import { DirectoryBrowserService } from './services/directory-browser.service';
import { Subscription } from 'rxjs/Subscription';
import { DirectoryEntry } from './models/DirectoryEntry';
import { trigger, transition, query, animateChild } from '@angular/animations';

@Component({
  selector: 'directory-browser',
  templateUrl: './directory-browser.component.html',
  styleUrls: ['./directory-browser.component.scss'],
  animations: [
    trigger('animate-if', [
      transition(':leave', [
        query('@*', animateChild())
      ])
    ])
  ]
})
export class DirectoryBrowserComponent implements OnInit, OnDestroy {
  _currentSelectedEntryIndex = -1;
  _filesGroupedByExtentions: { [extension: string]: Array<DirectoryEntry> } = null;
  _fileExtensions: Array<string> = [];
  _filteredEntries: Array<DirectoryEntry> = [];
  _previouslySelectedDirectoryEntries: DirectoryEntry[] = [{
    name: 'dips',
    parentPath: '',
    isDirectory: true
  }];
  _currentIndexOfEntryAsDirectory = 0;
  _showFileViewer = false;

  private _directoryEntries: Array<DirectoryEntry> = null;
  private _directoryEntriesSub: Subscription = null;

  constructor(private _directoryBrowserService: DirectoryBrowserService) { }

  ngOnInit() {
    this._directoryEntriesSub = this._directoryBrowserService
      .fetchAllEntriesInDir('dips', [''])
      .subscribe(listings => this._processDirectoryListings(listings));
  }

  ngOnDestroy() {
    this._directoryEntriesSub.unsubscribe();
  }

  _goUpDirectoryPath() {
    this._currentIndexOfEntryAsDirectory--;
    this._fetchDirectoryEntriesForEntry(
      this._previouslySelectedDirectoryEntries[this._currentIndexOfEntryAsDirectory]
    );
    if (this._currentIndexOfEntryAsDirectory === 0)
      this._previouslySelectedDirectoryEntries = this._previouslySelectedDirectoryEntries.slice(0, 1);
  }

  _onExtensionSelected(extension: string) {
    if (extension === 'all')
      this._filteredEntries = this._directoryEntries.sort((entry1, entry2) => {
        if (entry1.isDirectory && !entry2.isDirectory) return -1;
        if (!entry1.isDirectory && entry2.isDirectory) return 1;
        return entry1.name.localeCompare(entry2.name);
      });
    else
      this._filteredEntries = this._filesGroupedByExtentions[extension].sort(
        (entry1, entry2) => entry1.name.localeCompare(entry2.name)
      );
  }

  _newEntrySelected(index: number) {
   const entry = this._filteredEntries[index];
   if (entry.isDirectory) {
     this._currentIndexOfEntryAsDirectory++;
     this._previouslySelectedDirectoryEntries.push(entry);
     this._fetchDirectoryEntriesForEntry(entry);
    }
    else {
      this._currentSelectedEntryIndex = index;
      this._showFileViewer = true;
    }
  }

  private _fetchDirectoryEntriesForEntry(entry: DirectoryEntry) {
    this._directoryEntriesSub.unsubscribe();
    this._directoryEntriesSub = this._directoryBrowserService
      .fetchAllEntriesInDir(entry.name, entry.parentPath.split('/'))
      .subscribe(listings => this._processDirectoryListings(listings));
  }

  private _processDirectoryListings(listings: { children: DirectoryEntry[] }) {
    this._directoryEntries = listings.children;
    this._filesGroupedByExtentions = listings.children
      .filter(entry => !entry.isDirectory)
      .reduce((group, file) => {
        const extension = file.name
          .substring(file.name.lastIndexOf('.') + 1)
          .toLowerCase();
        group[extension] = (group[extension] || []).concat(file);
        return group;
      }, {});
    this._fileExtensions = ['all'].concat(Object.keys(this._filesGroupedByExtentions));
    this._onExtensionSelected('all');
  }
}
