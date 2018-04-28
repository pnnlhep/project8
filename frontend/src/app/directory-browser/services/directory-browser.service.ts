import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DirectoryBrowserService {

  private readonly _host = `${location.protocol}//${location.hostname}:8080`;
  private readonly _endpoints = {
    listings: `${this._host}/project8/api/directory-browser/listings/:directory`,
    filedata: `${this._host}/project8/api/directory-browser/data/:file`
  };

  constructor(private _http: HttpClient) { }

  fetchAllEntriesInDir(dirname: string, parentPaths: Array<string>): Observable<any> {
    return this._http.get(this._endpoints.listings.replace(':directory', dirname), {
      params: {
        parentPaths: parentPaths.join(',')
      }
    });
  }

  fetchDataForFileName(fileName: string, parentPaths: string[]) {
    return this._http.get(this._endpoints.filedata.replace(':file', fileName), {
      responseType: 'blob',
      params: {
        parentPaths: parentPaths.join(',')
      }
    });
  }

}
