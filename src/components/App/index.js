import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Navigation from '../reusable-components/Navigation';
import Home from '../Home';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#8105d8' },
    secondary: { main: '#3c9d9b' }
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    useNextVariants: true
  }
});
const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Navigation />
      <Home />
    </MuiThemeProvider>
  );
}

export default App;