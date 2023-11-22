import { Box, Stack, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Header from './Component/Header';
import LeftBody from './Component/LeftBody';
import CenterBody from './Component/CenterBody';
import RightBody from './Component/RightBody';
import Create from './Component/Create';
import { useState } from 'react';
import { orange, red } from '@mui/material/colors';

function App() {
  const [mode,setMode]=useState('light')

  const darkTheme= createTheme({
    palette:{
      mode:mode,
      primary: {
        main:orange[500]
      },
      secondary:{
        main:red[400]
      }
    },

    breakpoints: {
      values:{
        xs:0,
        sm:650,
        md:950,
        lg:1250,
        xl:1500
      }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.primary'}>
      <Header/>
      <Stack direction='row' spacing={2} justifyContent="space-between">
        <LeftBody/>
        <CenterBody/>
        <RightBody mode={mode} setMode={setMode}/>
      </Stack>
      <Create/>
    </Box>
    </ThemeProvider>
  );
}

export default App;
