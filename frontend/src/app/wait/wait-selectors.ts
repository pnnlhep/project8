import { createSelector } from '@ngrx/store';
import { AppState } from '../models/app-state';

const isRequestActiveSelector = (state: AppState) => state.isRequestActive;

export const selectIsRequestActive = createSelector(isRequestActiveSelector, state => state);