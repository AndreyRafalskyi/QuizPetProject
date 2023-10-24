import { baseURL } from "./config";

export class OpenTBDClient<T, T_U extends Record<string, string | number> = Record<string, string>> {
  baseURL: string;
  url: string;
  constructor(url: string) {
    this.baseURL = baseURL;
    this.url = url;
  }

  attachQueryParameters = (params: T_U) => {
    this.url =
      this.url +
      "?" +
      Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join("&");
    return this;
  };

  async request(): Promise<T> {
    try {
      const response = await fetch(this.baseURL + this.url);
      if (response.status === 404) {
        return Promise.reject(Error("Not found"));
      } else if (response.status === 500) {
        return Promise.reject(Error("Server error"));
      } else if (!response.ok) {
        return Promise.reject(Error(`HTTP error! status: ${response.status}`));
      }
      return await response.json();
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
