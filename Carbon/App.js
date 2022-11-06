import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import GETDB from './pages/GETDB';

import { useFonts } from 'expo-font';


import HistoryScreen from './pages/history';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <HomePage />
    <StatusBar style="auto" />

    <View style={navStyles.viewContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <View >
              <Entypo name="home" size={36} color="green" style={navStyles.button} />
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Add Trip')}>
          <View >
              <Feather name="plus-circle" size={36} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('History')}>
          <View >
              <FontAwesome5 name="history" size={36} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
    </View>

    </View>
  );
}

function AddTripScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>Not Balls!!!</Text>
    <Button
        title="Go to HomeScreen"
        onPress={() => navigation.navigate('Home')}
      />
    <StatusBar style="auto" />
    
    <View style={navStyles.viewContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <View >
              <Entypo name="home" size={36} color="white" style={navStyles.button} />
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Add Trip')}>
          <View >
              <Feather name="plus-circle" size={36} color="green" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('History')}>
          <View >
              <FontAwesome5 name="history" size={36} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
    </View>

    </View>
  );
}

export default function App({navigation}) {
  
  console.log(GETDB("AHHH", "Ford", "11/5/22", 11.2, 102.3))

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ animation: 'fade', headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Trip" component={AddTripScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        {/* <Stack.Screen name="Test" component={TestScreen} /> */}
      </Stack.Navigator>


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0
  },
});

const navStyles = StyleSheet.create({
  
  viewContainer: {
    flexDirection: "row",
    marginTop: "auto",
    
  },

  button: {
      backgroundColor: "black",
      padding: 10,
      height: 100,
      flex: 0,
      padding:20,
      width: Dimensions.get('screen').width / 3,
      textAlign: 'center'
  },

  
});
