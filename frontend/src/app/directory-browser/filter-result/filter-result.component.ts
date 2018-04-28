import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

import { DirectoryEntry } from '../models/DirectoryEntry';

@Component({
  selector: 'filter-result',
  templateUrl: './filter-result.component.html',
  styleUrls: ['./filter-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterResultComponent implements OnInit {
  @Input() directoryEntries: Array<DirectoryEntry>;
  @Input() canGoUpDirectoryPath = false;
  // @Input() canGoDownDirectoryPath = false;
  @Output() entryIndexSelected = new EventEmitter<number>();
  @Output() goUpDirectoryPath = new EventEmitter<void>();
  // @Output() goDownDirectoryPath = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  _trackBy(_, entry: DirectoryEntry) {
    return entry.name;
  }
}
