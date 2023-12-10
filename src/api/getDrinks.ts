import { validateFetch } from "../utils/functions";

export const getDrinksByLetter = async (letter: string) => {
  const url = `search.php?f=${letter}`;

  try {
    const resp = await validateFetch(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const getDrinkById = async (id: string) => {
  const url = `lookup.php?i=${id}`;

  try {
    const resp = await validateFetch(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};
export const getDrinsByIngredients = async (name: string) => {
  const url = `filter.php?i=${name}`;

  try {
    const resp = await validateFetch(url);
    return resp.data;
  } catch (error) {
    return error;
  }
};
