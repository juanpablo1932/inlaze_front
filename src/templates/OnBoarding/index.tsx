import { OnBoardingProps } from "../../types/PropsTypes";
import styles from "./OnBoarding.module.scss";

export default function OnBoarding(props: OnBoardingProps) {
  return (
    <>
      <header className={styles.header}>{props.header}</header>
      <main>
        <div>{props.navbar}</div>
        <section className={styles.section}>
          {props.content}
          <div style={{ position: "relative", width: "100%" }}>
            {props.footer}
          </div>
        </section>
      </main>
    </>
  );
}
