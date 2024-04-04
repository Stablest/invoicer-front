import { backendFetch } from "..";
import { handleError } from "../../../utils/handle-error";

const refreshToken = async () => {
  try {
    const response = await backendFetch("/auth/refresh");
    return await response.json();
  } catch (error) {
    return handleError(error);
  }
};

export { refreshToken };
