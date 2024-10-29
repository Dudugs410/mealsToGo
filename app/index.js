import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import { StatusBar, Platform, Text } from "react-native"
import { ThemeProvider } from "styled-components/native"
import { theme } from "./infrastructure/theme"
import { RestaurantScreen } from './features/restaurant/screens/restaurants.screen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: "home",
  Settings: 'settings',
  Map: 'map',

}

const tabBarIcon = (iconName) => ({ size, color }) => (
  <Ionicons name={iconName} size={size} color={color} />
)

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: tabBarIcon(iconName),  // Ensure this is returned as an object
  }
}


const Settings = () => <Text>Settings</Text>
const Map = () => <Text>Map</Text>

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
          <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'darkblue'
          }}
          >
            <Tab.Screen name='Restaurants' component={RestaurantScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Map' component={Map} options={{ headerShown: false }}/>
            <Tab.Screen name='Settings' component={Settings} options={{ headerShown: false }}/>
          </Tab.Navigator>
      </ThemeProvider>
      <ExpoStatusBar style='auto'/>
    </>
  )
}
