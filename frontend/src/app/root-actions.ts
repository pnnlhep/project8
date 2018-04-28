import { Action } from "@ngrx/store";

export const BEGIN_REQUEST = 'BEGIN_REQUEST';
export const END_REQUEST = 'END_REQUEST';

export class BeginRequest implements Action {
  readonly type: string = BEGIN_REQUEST;
}

export class EndRequest implements Action {
  readonly type: string = END_REQUEST;
}