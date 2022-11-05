import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './pages/NavBar';
export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text>Balls!!!</Text>
        <StatusBar style="auto" />
      </View>
      <NavBar />
    </>
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
