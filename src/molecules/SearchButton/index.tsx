import React from "react";
import styles from "./SearchButton.module.scss";
import { SearchButtonProps } from "../../types/PropsTypes";

export default function SearchButton(props: SearchButtonProps) {
  return (
    <>
      <input
        defaultValue={props.value}
        onChange={props.callback}
        placeholder={props.placeholder}
        className={styles.searchInput}
      />
    </>
  );
}
