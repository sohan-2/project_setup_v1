import { instance } from "./instance";

export const fetchExampleData = async () => {
  const response = await instance.get(`posts`).json();
  return response;
};

export const postExampleData = async (data) => {
  const response = await instance.post(`posts`, { json: data }).json();
  return response;
};
