import { Initializer } from 'actionhero';
import { plugin } from '@grouparoo/core';
import { test } from '../lib/test';
import { AirtableAppOptionsOptions } from './options';
const packageJSON = require('./../../package.json');

export const airtablePluginName = 'airtable';
export class Plugins extends Initializer {
  constructor() {
    super();
    this.name = packageJSON.name;
  }
  async initialize() {
    plugin.registerPlugin({
      name: packageJSON.name,
      icon: '/public/@bsegal/airtable/airtable.png',
      templates: [],
      apps: [
        {
          name: airtablePluginName,
          displayName: 'Airtable',
          options: AirtableAppOptionsOptions,
          methods: { test },
        },
      ],
    });
  }
  async start() {
    plugin.mountModels();
  }
}
