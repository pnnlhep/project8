import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DirectoryBrowserService {

  private readonly _endpoints = {
    entries: `/project8/api/directory-browser/:directory/entries`
  };

  constructor(private _http: HttpClient) { }

  fetchAllEntriesInDir(dirname: string, parentPaths: Array<string>): Observable<any> {
    return this._http.get(this._endpoints.entries.replace(':directory', dirname), {
      params: {
        parentPaths: parentPaths.join(',')
      }
    });
  }

}