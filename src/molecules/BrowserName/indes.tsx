import { useContext, useEffect, useState } from "react";
import styles from "./BrowserName.module.scss";
import { AppContext } from "../../context/AppContext/AppContext";
import { getDrinksByLetter } from "../../api/getDrinks";
import React from "react";
import DrinksCard from "../../atoms/DrinksCard";
import { useNavigate } from "react-router-dom";

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export default function BrowserName() {
  const navigate = useNavigate();
  const { setFilterLetter, filterLetter } = useContext(AppContext);
  const [data, setData] = useState<Drink[]>([]);

  const alphabet = "A/B/C/D/E/F/G/H/I/J/K/L/M/N/O/P/Q/R/S/T/U/V/W/X/Y/Z";

  const handleFilter = (letter: string) => {
    if (setFilterLetter) {
      setFilterLetter(letter);
    }
  };

  const handleNavigate = (id: string) => {
    navigate(`/drinkdetail/${id}`);
  };

  const clearFilter = () => {
    if (setFilterLetter) {
      setFilterLetter(null);
      setData([]);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (filterLetter) {
        const res = await getDrinksByLetter(filterLetter);
        setData(res.drinks);
      }
    }
    fetchData();
  }, [filterLetter]);
  return (
    <>
      <div className={styles.separator}></div>
      <div style={{ width: "100%" }}>
        <p>Browse By Name</p>
        <div>
          <div style={{ letterSpacing: "5px" }}>
            <span onClick={clearFilter} style={{ cursor: "pointer" }}>
              Borrar/
            </span>
            {alphabet.split("").map((letter, index) => (
              <span
                style={{ cursor: "pointer" }}
                key={index}
                onClick={() => handleFilter(letter)}>
                {letter}
              </span>
            ))}
          </div>
          <section className={styles.section}>
            {data?.length > 0
              ? data.map((item, index) => (
                  <React.Fragment key={index}>
                    <DrinksCard
                      img={item.strDrinkThumb}
                      drinkName={item.strDrink}
                      falseBottom={true}
                      otherText="detail"
                      handleNavigate={() => handleNavigate(item.idDrink)}
                    />
                  </React.Fragment>
                ))
              : null}
          </section>
        </div>
      </div>
    </>
  );
}
