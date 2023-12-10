import { useState } from "react";
import { HOCProps } from "../../types/ContextTypes";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }: HOCProps) => {
  const [search, setSearch] = useState("");
  const [filterLetter, setFilterLetter] = useState(null);
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        filterLetter,
        setFilterLetter: setFilterLetter as React.Dispatch<
          React.SetStateAction<string | null>
        >,
      }}>
      {children}
    </AppContext.Provider>
  );
};
