import { isResponseOK } from "../../utils/functions/is-response-ok";

const baseURL = import.meta.env.VITE_HOST;
if (!!!baseURL) {
  throw new Error("Invalid baseURL");
}

const backendFetch = async (input: RequestInfo | string, init?: RequestInit) => {
  const response = await fetch(baseURL + input, { ...init, credentials: "include" });
  if (isResponseOK(response)) {
    return response;
  }
  throw new Error(await response.json());
};

export { backendFetch };
