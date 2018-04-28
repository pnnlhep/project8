import { Component, OnInit, ViewEncapsulation, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'file-extension-filter',
  templateUrl: './file-extension-filter.component.html',
  styleUrls: ['./file-extension-filter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileExtensionFilterComponent implements OnInit {

  @Output()
  extensionSelected = new EventEmitter<string>();

  @Input()
  extensions: Array<string>;

  _selectedExtension = 'all';
  
  constructor() { }

  ngOnInit() {
  }

  _selectExtension(ext) {
    this.extensionSelected.emit(ext);
    this._selectedExtension = ext;
  }

}
