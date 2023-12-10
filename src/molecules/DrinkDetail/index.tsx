import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDrinkById } from "../../api/getDrinks";

interface DrinkId {
  idDrink: string;
  strDrink: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export default function DrinkDetail() {
  const [data, setData] = useState<DrinkId[]>([]);
  console.log(data);
  const params = useParams();

  async function fetchData() {
    if (params.idDrink) {
      const res = await getDrinkById(params.idDrink);
      setData(res.drinks);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Drink detail</h1>
      <h2>{data[0].strDrink}</h2>
      <img src={data[0].strDrinkThumb} alt="" />
      <section></section>
      <section></section>
    </>
  );
}
