import { useLazyFetch } from "vue";

export const useData = () => {
  const data = useLazyFetch("api/collectivites");
  console.log("usedata");

  return data;
};
