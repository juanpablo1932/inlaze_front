import React from "react";
import versatilityImg from "../../assets/Coctail Assets Front/water-solid 1.png";
import distiontivFlavorImg from "../../assets/Coctail Assets Front/cocktail-solid 1.png";
import purityImg from "../../assets/Coctail Assets Front/Vector.png";
import arrowImg from "../../assets/Coctail Assets Front/Vector 1.png";
import styles from "./WelcomeSection.module.scss";
import CircularCard from "../../atoms/CircularCard";

export default function WelcomeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.leftSection}>
        <h1 className={styles.principalLabel}>
          Drink of the
          <br />
          moment
        </h1>
        <p className={styles.principalDescription}>
          Gin, also known as gin, is one of the most popular and appreciated
          <br />
          alcoholic beverages worldwide, especially for its versatility in
          <br />
          cocktails. Originally from Europe, this spirit has evolved over the
          <br />
          centuries and comes in a wide range of styles and flavors.
        </p>
        <p className={styles.principalScore}>4.9</p>
        <button className={styles.tryNowButton}>
          Try now{" "}
          <div className={styles.arrowImgContainer}>
            <img style={{ alignSelf: "center" }} src={arrowImg} alt="" />
          </div>
        </button>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.circularCardContainer}>
          <CircularCard img={versatilityImg} />
          <div className={styles.containerDescription}>
            <h2 className={styles.rightSectionH2}>Versatility</h2>
            <p className={styles.rightSectionDescription}>
              The range of flavors in gin is
              <br />
              exceptionally wide, thanks to the
              <br />
              variety of botanicals that can be
              <br />
              used in its production.
            </p>
          </div>
        </div>
        <div className={styles.circularCardContainer}>
          {" "}
          <CircularCard img={distiontivFlavorImg} />
          <div className={styles.containerDescription}>
            <h2 className={styles.rightSectionH2}>Distiontiv Flavor</h2>
            <p className={styles.rightSectionDescription}>
              Bittersweet and slightly
              <br />
              woody flavor is the
              <br />
              signature of any gin.
            </p>
          </div>
        </div>
        <div className={styles.circularCardContainer}>
          {" "}
          <CircularCard img={purityImg} />
          <div className={styles.containerDescription}>
            <h2 className={styles.rightSectionH2}>Purity</h2>
            <p className={styles.rightSectionDescription}>
              This gives it a clean, pure feel,
              <br />
              without the caramel or vanilla notes
              <br />
              that come from barrel aging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
