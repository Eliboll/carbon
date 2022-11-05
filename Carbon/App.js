import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import NavBar from './pages/NavBar';

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
  </View>
  );
}

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test" component={History} />
      </Stack.Navigator>

      <NavBar navigationVar={navigation} />
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
