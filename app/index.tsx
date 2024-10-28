import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { StatusBar, Platform } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./infrastructure/theme";
import { RestaurantScreen } from './features/restaurant/screens/restaurants.screen';

import {
  useFonts as useOswald,
  Oswald_400Regular
} from '@expo-google-fonts/oswald'

import {
  useFonts as useLato,
  Lato_400Regular
} from '@expo-google-fonts/lato'

const isAndroid = Platform.OS === 'android'

console.log('isAndroid? ', isAndroid)
console.log('StatusBar.currentHeight: ', StatusBar.currentHeight)

export default function Index() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if(!oswaldLoaded || !latoLoaded){
    return null
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  )
}
