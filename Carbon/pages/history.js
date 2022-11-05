import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import HistoryData from "./historyData";

function Item({ historyEntry }) {
  return (
    <>
      <View style={banner.header}>
        <Grid>
          <Row style={banner.headerRow}>
            <Col>
            <Text style={banner.TripName}>{historyEntry.Trip_Name}</Text>
            </Col>
            <Col>
            <Text style={banner.vehicle}>{historyEntry.Vehicle}</Text>
            </Col>
          </Row>
          <Row style={banner.dataRow}>
            <Col>
            <Text style ={banner.CarbonUsage}>{historyEntry.CO2} kg Carbon</Text>
            </Col>
            <Col>
            <Row>
            <Text style = {banner.Date}>{historyEntry.Date}</Text>
            </Row>
            <Row>
            <Text style = {banner.Distance}>{historyEntry.Distance} Miles</Text>
            </Row>
            </Col>
          </Row>
        </Grid>
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
    borderWidth: 4,
    borderTopWidth: 6,
    borderBottomWidth: 0,
    marginBottom: 0
  },
  headerRow: {
    backgroundColor: '#6C6C6C',
    color: 'white'
  },
  dataRow: {
    backgroundColor: '#3A3A3A',
  },
  TripName: {
    alignSelf: 'center',
    color: 'white',

  },
  vehicle: {
    alignSelf: 'center',
    color: 'white',
  },
  CarbonUsage: {
    alignSelf: 'center',
    color: '#AF0000',
  },
  Date: {
    color: 'white'
  },
  Distance: {
    color: 'white'
  },
});

