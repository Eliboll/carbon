import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';

import { useFonts } from 'expo-font';


const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <>
      <HomePage />
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Quicksand': require('./assets/Quicksand.ttf'),
    'Codystar': require('./assets/Codystar-Regular.ttf'),
  
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
      }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>

      <NavBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
