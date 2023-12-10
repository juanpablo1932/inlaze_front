import { createContext } from "react";
import { AppContextProps } from "../../types/ContextTypes";

export const AppContext = createContext<AppContextProps>({} as AppContextProps);
