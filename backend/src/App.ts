import * as express from 'express';
import * as http from 'http';
import * as bodyParser from 'body-parser';

const INSTANCE: express.Express = express();
const SERVER = http.createServer(INSTANCE);

export class App {
  private readonly _directoryBrowserEndpoints = {
    entries: '/project8/api/directory-browser/:directory/entries'
  };

  constructor() {
    this._addMiddlewares();
  }

  onBrowseDirectory(listener: (request: express.Request, response: express.Response) => void) {
    INSTANCE.get(this._directoryBrowserEndpoints.entries, listener);
  }

  start(addr: string, port: number, cb?: () => void) {
    SERVER.listen(port, addr, cb || (() => console.log(`Server started on port ${port}`)));
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
  }

}
