import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/index';
import Intro from './components/Intro';

import { dark } from "./themes/dark"
import { light } from "./themes/light"

const App : React.FC = () => {

  const [isPageload, setIsPageload] = useState (true)
  const [theme, setTheme] = useState(light)

  function changeForDarkTheme(): void {
    if(isPageload && theme === light) setIsPageload(false)
    if (theme === light) setTheme(dark)

  }

  function changeForLightTheme(): void {
    if(isPageload && theme === dark) setIsPageload(false)
    if (theme === dark) setTheme(light)
  }

  return (
    <ThemeProvider theme={ theme }>
        <Navbar darkTheme={ changeForDarkTheme } lightTheme ={ changeForLightTheme }/>
        <Intro isPageload={ isPageload }/>
    </ThemeProvider>
  );
}

export default App;
