import { ACCESS_TOKEN } from '../_consts/accessToken';

// GitHub API用のカスタムfetch(GET)
export const ghGet = async <T = never>(
  url: string,
  options?: NextFetchRequestConfig
): Promise<T | null> => {
  try {
    const res = await fetch(url, {
      headers: {
        authorization: `token ${ACCESS_TOKEN}`,
      },
      next: {
        ...options,
      },
    });

    const json = await res.json();

    return json as T;
  } catch (e) {
    return null;
  }
};
