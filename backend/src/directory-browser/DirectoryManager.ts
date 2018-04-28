import { readdirSync, statSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { homedir } from 'os';
// import { Buffer } from 'buffer';

import { DirectoryEntry } from './DirectoryEntry';

export class DirectoryManager {
  private readonly _userHome: string = homedir();

  getDirectoryListings(pathToDirectoryFromDipsDir: string): DirectoryEntry[] {
    const directoryToTraverse = resolve(this._userHome, pathToDirectoryFromDipsDir);
    return readdirSync(directoryToTraverse).map(name => ({
      name,
      parentPath: pathToDirectoryFromDipsDir,
      isDirectory: statSync(resolve(directoryToTraverse, name)).isDirectory()
    } as DirectoryEntry)).filter(listing => !listing.name.startsWith('.'));
  }

  getFileData(pathToFileFromDipsDir: string): Buffer {
    const fullPathToFile = resolve(this._userHome, pathToFileFromDipsDir);
    return readFileSync(fullPathToFile);
  }
}