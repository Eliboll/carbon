import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

import { readRemoteFile } from 'react-native-csv';

import SelectDropdown from 'react-native-select-dropdown';

import GETDB from './GETDB';

// import VehicleData from '../assets/vehicleDataCondensed.csv';
// readRemoteFile(
//     '../assets/vehicleDataCondensed.csv',
//     {
//       complete: (results) => {
//         console.log('Results:', results)
//       }
//     }
//   );
let years = ["2022", "2021", "2020"];
let makes = ["Ford", "Mazda", "Pontiac", "Jeep"];



 
  

export default function AddTrip()
{
    const [fieldMakeInactive, setMakeField] = React.useState(true);
    const [fieldModelInactive, setModelField] = React.useState(true);

    const [readyToSend, setReadyToSend] = React.useState(false);

    
    function sendData(year, make, model, miles, tripName)
    {
        console.log("Calling send data?");
        
        console.log("Year: " + year);
        console.log("Make: " + make);
        console.log("Model: " + model);
        console.log("Miles: " + miles);
        var date = Date.now().toLocaleString();
        console.log(GETDB(tripName, make, date, parseFloat(miles), 102.3))
    
        
    }

    const [year, setYear] = React.useState('');
    const [make, setMake] = React.useState('');
    const [model, setModel] = React.useState('');
    const [miles, setMiles] = React.useState('');
    const [tripName, setTripName] = React.useState(0);

    

    return (
        <View>
            <Text style={addFormStyles.title}>Add a Trip</Text>
            <SelectDropdown dropdownStyle={addFormStyles.dropDownField}
                data={years}
                defaultButtonText="Enter Year"

                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setMakeField(false);
                    setYear(selectedItem);
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            <SelectDropdown dropdownStyle={addFormStyles.dropDownField}
                data={makes}
                defaultButtonText="Enter Make"
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setModelField(false);
                    setMake(selectedItem);
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                disabled={fieldMakeInactive}
            />

            <SelectDropdown dropdownStyle={addFormStyles.dropDownField}
                data={makes}
                defaultButtonText="Enter Value"
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setModel(selectedItem)
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
                disabled={fieldModelInactive}
            />
            <Text style={addFormStyles.distanceText}>Enter Trip Name</Text>
            <TextInput 
                style={addFormStyles.mileageField}
                keyboardType= 'default' 
                onChangeText={(text) => setTripName(text)}
            />
            <Text style={addFormStyles.distanceText}>Enter Distance</Text>
            <TextInput 
                style={addFormStyles.mileageField}
                keyboardType= 'numeric' 
                onChangeText={(text) => setMiles(text)}
            />
            <Button
                title="Submit"
                color="green"
                padding="30"
                onPress={() => {sendData(year, make, model, parseFloat(miles), tripName)}}
            />
        </View >
    )
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
  
  const addFormStyles = StyleSheet.create({
    
    viewContainer: {
      flexDirection: "row",
      marginTop: "auto",
      
    },
    title:
    {
        fontSize:36,
        fontStyle: 'bold',
        marginTop:52,
        color: 'white',
        textAlign: 'center'
    },
    dropDown:
    {
        margin: 10
    },
    distanceText: {
        fontSize:20,
        textAlign: 'center',
        color: 'white',
        marginBottom:32,
        marginTop: 64
    },
    dropDownField:
    {
      fontSize:36,
      color: 'purple'  
    },
    mileageField:
    {
        backgroundColor: '#f1f1f1',
        fontSize: 36
    },
    submitButton:
    {
        color: "green"
    }
    
  });