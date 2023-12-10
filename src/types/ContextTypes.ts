export interface HOCProps {
  children?: JSX.Element | JSX.Element[];
  content?: JSX.Element | JSX.Element[];
}

export interface AppContextProps {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  filterLetter?: string | null;
  setFilterLetter?: React.Dispatch<React.SetStateAction<string | null>>;
}
