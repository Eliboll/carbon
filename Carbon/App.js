import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';

import { useFonts } from 'expo-font';


import History from './pages/history';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
    <Text>Balls!!!</Text>
    <Button
        title="Go to TestScreen"
        onPress={() => navigation.navigate('Test')}
      />
    <StatusBar style="auto" />

    <View style={navStyles.viewContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <View >
              <Entypo name="home" size={52} color="white" style={navStyles.button} />
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Test')}>
          <View >
              <Feather name="plus-circle" size={52} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Test')}>
          <View >
              <FontAwesome5 name="history" size={52} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
    </View>

    </View>
  );
}

function TestScreen({navigation}) {
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
              <Entypo name="home" size={52} color="white" style={navStyles.button} />
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Test')}>
          <View >
              <Feather name="plus-circle" size={52} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Test')}>
          <View >
              <FontAwesome5 name="history" size={52} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
    </View>

    </View>
  );
}

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ animation: 'fade' }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={History} />
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
