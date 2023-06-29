// API Fetcher
import { ApiStatus } from 'types/api-status';
export const fetcher = async (url: string): Promise<TApiResult> =>
  await fetch(url)
    .then((r) => r.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return { status: ApiStatus.API_BAD_REQUEST, error: error };
    });
