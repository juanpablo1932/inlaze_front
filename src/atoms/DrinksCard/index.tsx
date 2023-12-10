import React from "react";
import { DrinksCardProps } from "../../types/PropsTypes";
import styles from "./DrinksCard.module.scss";

export default function DrinksCard({
  sectionName,
  img,
  drinkName,
  falseBottom,
  otherText,
  handleNavigate,
}: DrinksCardProps) {
  return (
    <div className={styles.container}>
      {sectionName && <h3 className={styles.sectionName}>{sectionName}</h3>}
      <div className={styles.firstContainer}>
        <div className={falseBottom ? styles.secondContainer : undefined}>
          <img className={styles.img} src={img} alt="" />
        </div>
      </div>
      <h4
        style={
          otherText === "detail" ? { color: "#574747" } : { color: "white" }
        }>
        {drinkName}
      </h4>
      <p
        style={{ color: "#a3aba8" }}
        onClick={otherText === "detail" ? handleNavigate : undefined}>
        {otherText && otherText}
        <span style={{ color: "white" }}>{!falseBottom ? ">" : "+"}</span>
      </p>
    </div>
  );
}
