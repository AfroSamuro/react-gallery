
import { createContext } from "react";

export const themes = {
  dark: "dark-theme",
  light: "",
};

export const ThemeContext = createContext({
    theme: themes.light,
  changeTheme: () => {},
});