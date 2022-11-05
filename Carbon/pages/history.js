import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import HistoryData from "./historyData";

function Item({ historyEntry }) {
  return (
    <View style={banner.box}>
      <Text>{historyEntry.Trip_Name}</Text>
      <Text>{historyEntry.Vehicle}</Text>
    </View>
  )
}

export default function History() {
  return (
    <>
    <SafeAreaView style={banner.container}>
      <FlatList
        data={JSON.parse(JSON.stringify(HistoryData)).entries}
        renderItem={({ item }) => <Item historyEntry={item}/>}
      />
    </SafeAreaView>
    </>
  );
}

const banner = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
    borderColor: "#20232a",
    alignItems: 'center',
    borderWidth: 4,
    zIndex: -1,
    justifyContent: 'center',
  },
});

