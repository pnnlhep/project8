import { readdirSync, statSync } from 'fs';
import { resolve } from 'path';
import { homedir } from 'os';

import { ConfigurationManager } from '../ConfigurationManager';

import { DirectoryEntry } from './DirectoryEntry';

export class DirectoryManager {
  private readonly _configManager = ConfigurationManager.getInstance();
  private readonly _dipsParent = this._configManager.get('dipsParent');

  constructor() {
    if (this._dipsParent === '')
      this._dipsParent = homedir();
  }

  getDirectoryListings(pathToDirectoryFromDipsDir: string): DirectoryEntry[] {
    const directoryToTraverse = resolve(this._dipsParent, pathToDirectoryFromDipsDir);
    console.log(directoryToTraverse);
    return readdirSync(directoryToTraverse).map(name => ({
      name,
      parentPath: pathToDirectoryFromDipsDir,
      isDirectory: statSync(resolve(directoryToTraverse, name)).isDirectory()
    } as DirectoryEntry)).filter(listing => !listing.name.startsWith('.'));
  }

}