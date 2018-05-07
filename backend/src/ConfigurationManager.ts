import { readFileSync } from 'fs';
import { resolve } from 'path';

export class ConfigurationManager {
  private static _INSTANCE: ConfigurationManager = new ConfigurationManager();
  private readonly _config: any;

  private constructor() {
    this._config = JSON.parse(readFileSync(resolve(__dirname, 'config.json')).toString());
  }

  static getInstance() {
    return ConfigurationManager._INSTANCE;
  }

  get(configName: string) {
    if (!(configName in this._config))
      throw new Error(`Configuration name "${configName}" does not exist`);
    return this._config[configName];
  }

}