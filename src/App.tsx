import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/index';

import { dark } from "./themes/dark"
import { light } from "./themes/light"

const App : React.FC = () => {

  const [theme, setTheme] = useState(light)

  function changeForDarkTheme(): void {
    if (theme === light) setTheme(dark)
  }

  function changeForLightTheme(): void {
    if (theme === dark) setTheme(light)
  }

  return (
    <ThemeProvider theme={ theme }>
      <Navbar darkTheme={ changeForDarkTheme} lightTheme ={changeForLightTheme}/>
      <div className="App">
        Teste
      </div>
    </ThemeProvider>
  );
}

export default App;
