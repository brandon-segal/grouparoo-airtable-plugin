import { AppOptionsOption, SimpleAppOptions } from '@grouparoo/core';

export class AirtableAppOptions implements SimpleAppOptions {
  apiKey: string;
  base: string;
  airtableHost: string;
  constructor(simpleOptions: SimpleAppOptions) {
    this.apiKey = simpleOptions.apiKey.toString();
    this.base = simpleOptions.base.toString();
    this.airtableHost = simpleOptions.airtableHost
      ? 'https://api.airtable.com/'
      : simpleOptions.airtableHost.toString();
  }

  [key: string]: string | number | boolean;
}
export const AirtableAppOptionsOptions: Array<AppOptionsOption> = [
  {
    key: 'apiKey',
    type: 'password',
    displayName: 'Airtable API Key',
    required: true,
    description: 'Airtable (API) key',
  },
  {
    key: 'base',
    type: 'text',
    displayName: 'Airtable Base',
    required: true,
    description: 'Airtable Base to read tables from',
  },
  {
    key: 'table',
    type: 'text',
    displayName: 'Airtable Table',
    required: true,
    description: 'Airtable Table to sync',
  },
  {
    key: 'airtableHost',
    type: 'text',
    displayName: 'Airtable Host',
    required: false,
    description:
      "Airtable hosting url, if you don't have a custom airtable subdomain you probably don't need to change this.",
  },
];
