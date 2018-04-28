import { Component, OnInit, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CloseComponent implements OnInit {

  @Output() click = new EventEmitter<string>()

  constructor() { }

  ngOnInit() {
  }

}
