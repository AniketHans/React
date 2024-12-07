import { useContext } from "react";
import { createContext } from "react";

/**
 * Here below, we have given default value to our ThemeContext.
 * We can define variables and methods also. The methods need not have any definition as those will be overridden.
 */
const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Here we will be exporting the provider as well.
export const ThemeProvider = ThemeContext.Provider;

//We need to write syntax like useContext(<context>) to get the variables present in <context>. As we have done in Login.jsx file of 09miniContext project line 8.
//We can remove that hustle by exporting our custom hook doing the same thing. As shown below:-
export default function useTheme() {
  return useContext(ThemeContext);
}
