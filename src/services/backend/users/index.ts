import { backendFetch } from "..";

const usersURL = `/users`;

const getAllUsers = async () => {
  const response = await backendFetch(usersURL);
  const data = await response.json();
  return data;
};

export { getAllUsers };
