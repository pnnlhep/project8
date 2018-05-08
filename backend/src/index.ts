import { join } from 'path';

import { App } from './App';
import { DirectoryManager } from './directory-browser/DirectoryManager';
import { ConfigurationManager } from './ConfigurationManager';


const APP = new App();
const DIRECTORY_MANAGER = new DirectoryManager();
const CONFIG_MANAGER = ConfigurationManager.getInstance();

const PORT = process.env.PORT || CONFIG_MANAGER.get('port');

APP.onBrowseDirectory((request, response) => {
  const directoryName = request.params.directory;
  const parentPathToDirectory = join(...request.query.parentPaths.split(','), directoryName);
  response.json({
    children: DIRECTORY_MANAGER.getDirectoryEntries(parentPathToDirectory)
  });
});

APP.start(PORT);