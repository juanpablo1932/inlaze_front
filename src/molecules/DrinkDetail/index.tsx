import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDrinkById, getDrinsByIngredients } from "../../api/getDrinks";
import DrinksCard from "../../atoms/DrinksCard";
import styles from "./DrinkDetail.module.scss";

interface DrinkId {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export default function DrinkDetail() {
  const [data, setData] = useState<DrinkId[]>([]);
  const [dataDrinksByIngredients, setDataDrinksByIngredients] = useState<
    DrinkId[]
  >([]);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [filterIngredient, setFilterIngredient] = useState<string>("");
  const params = useParams();

  const handleFilter = (ingredient: string) => {
    if (setFilterIngredient) {
      setFilterIngredient(ingredient);
    }
  };

  async function fetchData() {
    if (params.idDrink) {
      const res = await getDrinkById(params.idDrink);
      setData(res.drinks);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const extractIngredients = (e: DrinkId) => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      const ingredientKey = `strIngredient${i}`;
      const ingredientValue = e[ingredientKey as keyof DrinkId];

      if (ingredientValue !== null) {
        ingredients.push(ingredientValue);
      }
    }

    return ingredients;
  };

  useEffect(() => {
    if (!data[0]) return;
    const result = extractIngredients(data[0]);
    setIngredients(result);
  }, [data[0]]);

  useEffect(() => {
    async function fetchData() {
      if (filterIngredient) {
        const res = await getDrinsByIngredients(filterIngredient);
        setDataDrinksByIngredients(res.drinks);
      }
    }
    fetchData();
  }, [filterIngredient]);

  return (
    <>
      <h1>Drink detail</h1>
      <h2>{data[0]?.strDrink}</h2>
      <img src={data[0]?.strDrinkThumb} alt="" />
      <h3>Instructions</h3>
      <section>{data[0]?.strInstructions}</section>
      <h3>Ingredients</h3>
      <section>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li
              key={index}
              onClick={() => handleFilter(ingredient)}
              style={{ cursor: "pointer" }}>
              {ingredient}
            </li>
          ))}
        </ul>
      </section>
      <h3>cocktails with the same ingredient</h3>
      <section className={styles.section}>
        {dataDrinksByIngredients?.length > 0
          ? dataDrinksByIngredients.map((item, index) => (
              <React.Fragment key={index}>
                <DrinksCard
                  img={item.strDrinkThumb}
                  drinkName={item.strDrink}
                  falseBottom={true}
                  otherText="detail"
                />
              </React.Fragment>
            ))
          : null}
      </section>
    </>
  );
}
