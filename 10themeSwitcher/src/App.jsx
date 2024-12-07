import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  //Toggling the dark mode
  useEffect(() => {
    const classList = document.querySelector("html").classList;
    classList.remove("dark", "light"); //Here we are removing whatever was previously present.
    classList.add(themeMode); //Now we are adding whatever is present in themeMode
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
