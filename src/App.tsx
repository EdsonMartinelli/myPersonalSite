import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar/index';

import { dark } from "./themes/dark"
import { light } from "./themes/light"

const App : React.FC = () => {
  return (
    <ThemeProvider theme={ light }>
      <Navbar />
      <div className="App">
        Teste
      </div>
    </ThemeProvider>
  );
}

export default App;
