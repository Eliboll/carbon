import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, SafeAreaView, FlatList, Dimensions, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

import HistoryData from "./historyData";
function buttonClicked({}) {

}
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
            <Col>
            <TouchableHighlight onPress={buttonClicked({})}>
              <FontAwesome5 name="redo" size={30} color="white" style={banner.button}/>
            </TouchableHighlight>
            </Col>
          </Row>
        </Grid>
      </View>
    </>
  )
}

export default function History({navigation}) {
  return (
    <>
    <SafeAreaView style={banner.container}>
      <FlatList
        data={JSON.parse(JSON.stringify(HistoryData)).entries}
        renderItem={({ item }) => <Item historyEntry={item}/>}
      />
    </SafeAreaView>
    <View style={navStyles.viewContainer}>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
          <View >
              <Entypo name="home" size={36} color="white" style={navStyles.button} />
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Add Trip')}>
          <View >
              <Feather name="plus-circle" size={36} color="white" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('History')}>
          <View >
              <FontAwesome5 name="history" size={36} color="green" style={navStyles.button}/>
          </View>
      </TouchableHighlight>
    </View>
    </>
  );
}

const banner = StyleSheet.create({
  container: {
    
  },
  button: {
    backgroundColor: "#3A3A3A",
    textAlign: 'center'
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
    borderTopWidth: 20,
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
    fontSize: 20,
    fontWeight: 'bold'

  },
  vehicle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  CarbonUsage: {
    alignSelf: 'center',
    color: '#AF0000',
    fontSize: 24
  },
  Date: {
    color: 'white'
  },
  Distance: {
    color: 'white'
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
