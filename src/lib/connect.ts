import { AirtableClient } from './client/client';
import { AirtableAppOptions } from '../initializers/options';
import { SimpleAppOptions } from '@grouparoo/core';

export async function connect(appOptions: SimpleAppOptions) {
  const airtableOptions = new AirtableAppOptions(appOptions);
  return new AirtableClient(airtableOptions);
}
