import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output,
  OnDestroy,
  OnChanges
} from '@angular/core';
// import { trigger, animate, style, transition } from '@angular/animations';
import { DomSanitizer } from '@angular/platform-browser';

import { DirectoryEntry } from '../models/DirectoryEntry';
import { fade } from '../../animations';

@Component({
  selector: 'file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    fade('fade')
  ]
})
export class FileViewerComponent implements OnInit, OnDestroy, OnChanges {
  @Input() entries: DirectoryEntry[] = [];

  @Input() currentEntryIndex = 0;

  @Output() close = new EventEmitter<number>();

  _currentEntry: DirectoryEntry = null;
  _indexOfFirstNonDirectoryEntry = -1;

  constructor(private _sanitizer: DomSanitizer) { }

  ngOnInit() { }

  ngOnChanges() {
    this._indexOfFirstNonDirectoryEntry = this.entries.findIndex(entry => !entry.isDirectory);
    this._currentEntry = this.entries[this.currentEntryIndex];
  }

  ngOnDestroy() { }

  _close() {
    this.close.emit();
  }

  _nextEntry() {
    this._currentEntry = this.entries[++this.currentEntryIndex];
  }

  _previousEntry() {
    this._currentEntry = this.entries[--this.currentEntryIndex];
  }

  _santizePdfFileUrl(originalUrl: string) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(originalUrl);
  }
}
