const BASE_URL = import.meta.env.VITE_HOST;
if (!!!BASE_URL) {
  throw new Error("Invalid baseURL");
}

export { BASE_URL };
