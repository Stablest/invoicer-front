import { FetcherError } from "./errors/fetcher.error";

export type Newable<T> = { new (...args: any[]): T };

export interface FetcherOptions {
  validateStatus?: (status: number) => unknown;
  parseResponse?: {
    fn: (response: Response, parseClass: Newable<any>) => Promise<any>;
    parseClass: Newable<any>;
  };
  validateResponse?: (res: Response) => unknown;
}

class Fetcher {
  private options?: FetcherOptions & RequestInit;

  private async fetch(input: RequestInfo, init?: RequestInit) {
    const overridableInit = { ...this.options, ...init };
    try {
      let response = await fetch(input, overridableInit);
      if (this.options?.validateStatus) {
        if (!this.options.validateStatus(response.status)) {
          throw new FetcherError("Status not satisfied.", response.status);
        }
      }
      if (this.options?.validateResponse) {
        if (!this.options.validateResponse(response)) {
          throw new FetcherError("Response not satisfied.", response.status);
        }
      }
      if (this.options?.parseResponse) {
        const { fn, parseClass } = this.options.parseResponse;
        response = await fn(response, parseClass);
      }
      if (!response) {
        throw new FetcherError("Empty response from server");
      }
      return response;
    } catch (error) {
      if (error instanceof Error) {
        console.log("FETCHER ERROR HANDLING ->", { error });
      }
      throw new Error('Something went wrong... [needs to be handled]');
    }
  }

  public async get(input: RequestInfo, init?: RequestInit) {
    return await this.fetch(input, {...init, method: 'GET'})
  }

  public async post(input: RequestInfo, init?: RequestInit) {
    return await this.fetch(input, {...init, method: 'POST'})
  }

  public async update(input: RequestInfo, init?: RequestInit) {
    return await this.fetch(input, {...init, method: 'UPDATE'})
  }

  public async delete(input: RequestInfo, init?: RequestInit) {
    return await this.fetch(input, {...init, method: 'DELETE'})
  }

  constructor(options?: FetcherOptions & RequestInit) {
    this.options = options;
  }
}

export { Fetcher };
