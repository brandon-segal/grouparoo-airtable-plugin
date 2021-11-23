import { TestPluginMethod } from '@grouparoo/core';
import { connect } from './connect';

export const test: TestPluginMethod = async ({ appOptions }) => {
  const conn = await connect(appOptions);
  const { statusCode, body } = await conn.healthCheck();
  return { success: statusCode === 200, body };
};
