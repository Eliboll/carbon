import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

import HistoryData from "./historyData";

function Item({ historyEntry }) {
  return (
    <>
      <View style={banner.header}>
        <Text style={banner.TripName}>{historyEntry.Trip_Name}</Text>
        <Text style={banner.vehicle}>{historyEntry.Vehicle}</Text>
      </View>
      <View style={banner.box}>
        <Text>{historyEntry.Date}</Text>
        <Text>{historyEntry.Distance} Miles</Text>
        <Text>{historyEntry.CO2} kg Carbon</Text>
      </View>
    </>
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
    
  },
  box: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
    alignItems: 'center',
    borderWidth: 4,
    borderTopWidth: 0,
    justifyContent: 'center',
    marginTop: 0
  },

  header : {
    flex: 1,
    backgroundColor: '#fff',
    padding: 4,
    alignItems: 'center',
    borderWidth: 4,
    borderTopWidth: 6,
    borderBottomWidth: 0,
    //justifyContent: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    marginBottom: 0
  },

  TripName: {
    alignSelf: 'flex-start',

  },
  vehicle: {
    alignSelf: 'flex-end',
  }
});

