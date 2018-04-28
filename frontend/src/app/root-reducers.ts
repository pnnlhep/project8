import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './models/app-state';
import { BeginRequest, EndRequest, BEGIN_REQUEST, END_REQUEST } from './root-actions';

export const parentReducer: ActionReducerMap<AppState> = {
  isRequestActive
};

function isRequestActive(state = false, action: BeginRequest | EndRequest): boolean {
  switch (action.type) {
    case BEGIN_REQUEST:
      return true;
    case END_REQUEST:
      return false;
    default:
      return state;
  }
}