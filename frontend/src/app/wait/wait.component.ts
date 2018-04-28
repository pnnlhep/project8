import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, ViewEncapsulation } from '@angular/core';

import { fade } from '../animations';
import { selectIsRequestActive } from './wait-selectors';
import { AppState } from '../models/app-state';

@Component({
  selector: 'wait',
  templateUrl: './wait.component.html',
  styleUrls: ['./wait.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    fade('fadein'),
  ]
})
export class WaitComponent {

  isRequestActive: Observable<boolean>;

  constructor(private _store: Store<AppState>) {
    this.isRequestActive = this._store.select(selectIsRequestActive);
  }
}