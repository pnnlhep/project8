import { join } from 'path';

import { App } from './App';
import { DirectoryManager } from './directory-browser/DirectoryManager';

const PORT = process.env.PORT || 8080;

const APP = new App();
const DIRECTORY_MANAGER = new DirectoryManager();

APP.onBrowseDirectory((request, response) => {
  const directoryName = request.params.directory;
  const parentPathToDirectory = join(...request.query.parentPaths.split(','), directoryName);
  response.json({
    children: DIRECTORY_MANAGER.getDirectoryListings(parentPathToDirectory)
  });
});

APP.onFetchFileData((request, response) => {
  const filename = request.params.file;
  const parentPathToFile = join(...request.query.parentPaths.split(','));
  const buffer = DIRECTORY_MANAGER.getFileData(join(parentPathToFile, filename));
  console.log(buffer);
  response.write(buffer);
});

APP.start(PORT);