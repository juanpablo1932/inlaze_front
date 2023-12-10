import React from "react";
import styles from "./PopularSection.module.scss";
import DrinksCard from "../../atoms/DrinksCard";
import Vodka from "../../assets/Coctail Assets Front/Vodka.png";
import Gin from "../../assets/Coctail Assets Front/Gin.png";
import Rum from "../../assets/Coctail Assets Front/Rum.png";
import Tequila from "../../assets/Coctail Assets Front/Tequila.png";

export default function PopularSection() {
  const popularDrinks = [
    {
      img: Vodka,
      name: "Vodka",
      otherText: "Recipes with vodka",
    },
    {
      img: Gin,
      name: "Gin",
      otherText: "Recipes with Gin",
    },
    {
      section: "Popular Ingredients",
      img: Rum,
      name: "Rum",
      otherText: "Recipes with Rum",
    },
    {
      img: Tequila,
      name: "Tequila",
      otherText: "Recipes with Tequila",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {popularDrinks.map((drink) => (
          <React.Fragment key={drink.name}>
            <DrinksCard
              sectionName={drink.section && drink.section}
              img={drink.img}
              drinkName={drink.name}
              falseBottom={false}
              otherText={drink.otherText}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
