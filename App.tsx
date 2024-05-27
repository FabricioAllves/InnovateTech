import React from 'react'
import { StatusBar } from 'react-native';

import { ThemeProvider } from "styled-components/native";
import {theme} from "./theme";
import { useFonts, Karla_400Regular, Karla_700Bold } from '@expo-google-fonts/karla';
import { Home } from '@pages/Home';


//import { Routes } from '@routes/index';


export default function App() {

  const [fontsLoaded] = useFonts({
    Karla_400Regular, Karla_700Bold
  });

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>


          <Home/>

    </ThemeProvider>
  );
}