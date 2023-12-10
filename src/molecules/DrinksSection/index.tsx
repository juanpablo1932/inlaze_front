import React from "react";
import styles from "./DrinksSection.module.scss";
import DrinksCard from "../../atoms/DrinksCard";
import mojitoImg from "../../assets/Coctail Assets Front/mojito.png";
import OldFashioned from "../../assets/Coctail Assets Front/Old Fashioned.png";
import LongIslandTea from "../../assets/Coctail Assets Front/Long Island Tea.png";
import Negroni from "../../assets/Coctail Assets Front/Negroni.png";
import WhiskeySour from "../../assets/Coctail Assets Front/Whiskey Sour.png";
import DryMartini from "../../assets/Coctail Assets Front/Dry Martini.png";
import Daiquiri from "../../assets/Coctail Assets Front/Daiquiri.png";
import Margarita from "../../assets/Coctail Assets Front/Margarita.png";

export default function DrinksSection() {
  const popularDrinks = [
    {
      section: "Popular Drinks",
      img: mojitoImg,
      name: "Mojito",
    },
    {
      img: OldFashioned,
      name: "Old Fashioned",
    },
    {
      img: LongIslandTea,
      name: "Long Island Tea",
    },
    {
      img: Negroni,
      name: "Negroni",
    },
    {
      img: WhiskeySour,
      name: "Whiskey Sour",
    },
    {
      img: DryMartini,
      name: "Dry Martini",
    },
    {
      img: Daiquiri,
      name: "Daiquiri",
    },
    {
      img: Margarita,
      name: "Margarita",
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
              falseBottom={true}
              otherText="Add to my list "
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
