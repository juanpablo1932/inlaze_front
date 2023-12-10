import React from "react";
import styles from "./LatestSection.module.scss";
import DrinksCard from "../../atoms/DrinksCard";
import CocktailHorsesNeck from "../../assets/Coctail Assets Front/Cocktail Horses Neck.png";
import PlantersPunch from "../../assets/Coctail Assets Front/Planters Punch.png";
import RamosGinFizz from "../../assets/Coctail Assets Front/Ramos Gin Fizz.png";
import GinLemon from "../../assets/Coctail Assets Front/Gin Lemon.png";
import GinTonic from "../../assets/Coctail Assets Front/Gin Tonic.png";
import VodkaTonic from "../../assets/Coctail Assets Front/Vodka Tonic.png";
import VodkaLemon from "../../assets/Coctail Assets Front/Vodka Lemon.png";
import VodkaSlime from "../../assets/Coctail Assets Front/Vodka Slime.png";

export default function LatestSection() {
  const latestDrinks = [
    {
      section: "Latest Drinks",
      img: CocktailHorsesNeck,
      name: "Cocktail Horse’s Neck",
    },
    {
      img: PlantersPunch,
      name: "Planter’s Punch",
    },
    {
      img: RamosGinFizz,
      name: "Ramos Gin Fizz",
    },
    {
      img: GinLemon,
      name: "Gin Lemon",
    },
    {
      img: GinTonic,
      name: "Gin Tonic",
    },
    {
      img: VodkaTonic,
      name: "Vodka Tonic",
    },
    {
      img: VodkaLemon,
      name: "Vodka Lemon",
    },
    {
      img: VodkaSlime,
      name: "Vodka Slime",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {latestDrinks.map((drink) => (
          <React.Fragment key={drink.name}>
            <DrinksCard
              sectionName={drink.section && drink.section}
              img={drink.img}
              drinkName={drink.name}
              falseBottom={true}
              otherText="Add to my list"
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
