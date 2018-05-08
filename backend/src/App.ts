import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';
import { resolve } from 'path';

const INSTANCE: express.Express = express();
const SERVER = http.createServer(INSTANCE);

export class App {
  private readonly _directoryBrowserEndpoints = {
    listings: '/project8/api/directory-browser/listings/:directory',
    filedata: '/project8/api/directory-browser/data/:file'
  };

  constructor() {
    this._addMiddlewares();
    INSTANCE.get(['/'], (_, response) => response.sendFile(resolve(__dirname, '../../frontend/dist/index.html')));
  }

  onBrowseDirectory(listener: (request: express.Request, response: express.Response) => void) {
    INSTANCE.get(this._directoryBrowserEndpoints.listings, listener);
  }

  onFetchFileData(listener: (request: express.Request, response: express.Response) => void) {
    INSTANCE.get(this._directoryBrowserEndpoints.filedata, listener);
  }

  start(port: string | number, cb?: () => void) {
    SERVER.listen(port, cb || (() => console.log(`Server started on port ${port}`)));
  }

  private _addMiddlewares() {
    INSTANCE.use(bodyParser.json());
    INSTANCE.use(bodyParser.urlencoded({ extended: true }));
    INSTANCE.use((_, response, next) => {
      response.header('Access-Control-Allow-Origin', '*');
      response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    INSTANCE.use(express.static(resolve(__dirname, '../../dips')));
    INSTANCE.use(express.static(resolve(__dirname, '../../frontend/dist')));
    INSTANCE.use(express.static(resolve(__dirname)));
  }

}