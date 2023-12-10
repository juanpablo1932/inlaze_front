import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.ul}>
        {["Menu", "Rewards", "Blog"].map((item, index) => (
          <li className={styles.li} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}
