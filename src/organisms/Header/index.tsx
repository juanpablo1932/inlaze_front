import React, { useContext } from "react";
import Navbar from "../../molecules/Navbar";
import Logo from "../../assets/Coctail Assets Front/Logo.png";

import SearchButton from "../../molecules/SearchButton";
import { AppContext } from "../../context/AppContext/AppContext";

export default function Header() {
  const { setSearch } = useContext(AppContext);
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (setSearch) {
      setSearch(e.target.value);
    }
  };
  return (
    <>
      <img src={Logo}></img>
      <Navbar />
      <SearchButton
        placeholder="Search"
        value=""
        callback={handleFilterChange}
      />
    </>
  );
}
