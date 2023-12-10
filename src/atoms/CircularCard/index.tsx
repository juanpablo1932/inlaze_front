import React from "react";
import styles from "./CircularCard.module.scss";

export default function CircularCard({ img }: { img: string }) {
  return (
    <div className={styles.container}>
      <img style={{ alignSelf: "center" }} src={img} alt="" />
    </div>
  );
}
