// src/hooks/useExampleHook.js
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchExampleData, postExampleData } from "../api/example";

export const usePostExampleData = (data) => {
  return useMutation({ mutationFn: (req) => postExampleData(req) });
};
