import { AirtableAppOptions } from '../../initializers/options';
import Airtable from 'airtable';

interface HealthResponse {
  body: any;
  statusCode: number;
}

export class AirtableClient {
  apiKey: string;
  baseClient: Airtable.Base;
  host: string;
  constructor(appOptions: AirtableAppOptions) {
    this.apiKey = appOptions.apiKey;
    this.baseClient = new Airtable({ apiKey: appOptions.apiKey }).base(
      appOptions.apiKey,
    );
    this.host = appOptions.airtableHost;
  }
  async healthCheck(): Promise<HealthResponse> {
    return this.baseClient.makeRequest({
      method: 'GET',
      path: `${this.host}/v0/meta/bases`,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    });
  }
}
