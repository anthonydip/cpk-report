import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Import logo
import logo from './assets/logo.png';

// Import components
import Header from './components/Header/Header';
import { GlobalStyles } from './components/Theme/GlobalStyles';
import { lightTheme, darkTheme } from './components/Theme/Themes';

// Styled components
const Title = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 3.75rem;
  font-weight: 800;
  text-align: center;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [theme, setTheme] = useState(`light`);

  // Light and dark theme state toggler
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <GlobalStyles/>
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />

        <Logo>
          <a href="https://cpkip.com/" target="_blank" rel="noreferrer"><img src={logo} alt="Logo"/></a>
        </Logo>
        
        <Title>CpK Interior Products Inc.</Title>
      </div>
    </ThemeProvider>
  );
}

{/* <Title>CpK Interior Products Inc.</Title> */}

export default App;
