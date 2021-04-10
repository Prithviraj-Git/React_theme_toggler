import { useState } from 'react';

import { ThemeProvider } from "styled-components";

import lighttheme from "./themes/light_theme";
import darkTheme from "./themes/dark_theme";
import ThemeButton from "./components/Button/ThemeButton";
import Container from "./components/container/Container";

import './main.css';



function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lighttheme}>
      <div className="App">
        <Container>
          <ThemeButton toggleTheme={toggleTheme}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
