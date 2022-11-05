import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import HistoryData from "./historyData";

export default function History() {
  return (
    <>
      {HistoryData.entries.map((item, i) => (
        <View style={styles.container}>
          <Text key={i}>
              <Text>{item.Trip_Name}</Text>
              <Text>{item.Vehicle}</Text>
          </Text> 
        </View>
      ))} 
  
  </>
  );
}

const banner = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

