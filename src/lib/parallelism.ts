import { AppParallelismMethod } from '@grouparoo/core';

export const parallelism: AppParallelismMethod = async () => {
  return 5; // API endpoint is limited to 5 per second
};
