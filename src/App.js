import React from 'react'
import './App.css';
import Landing from './Common/Landing';
import { createTheme,ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette:{
    primary:{
      main:"#5446bd"
    },secondary:{
      main:"#000000"
    },
    success:{
      main:"#ffffff"
    }
  },
  typography:{
    button:{
      textTransform:'capitalize'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Landing />
    </div>
    </ThemeProvider>
  );
}

export default App;
