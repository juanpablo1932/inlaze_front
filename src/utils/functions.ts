import axios from "axios";

export const validateFetch = async (url: string) => {
  const res = await axios.get(
    `https://www.thecocktaildb.com/api/json/v1/1/${url}`
  );

  return res;
};
