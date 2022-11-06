import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Button, TouchableHighlight } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 
import {useState, useEffect} from "react";

import { readRemoteFile } from 'react-native-csv';

import SelectDropdown from 'react-native-select-dropdown';

import GETDB from './GETDB'
// import GETMakesByYearMake from './GETMakesByYearMake';


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


function later(delay) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay);
    });
}

export default function AddTrip()
{
    const [fieldMakeInactive, setMakeField] = React.useState(true);
    const [fieldModelInactive, setModelField] = React.useState(true);

    const [readyToSend, setReadyToSend] = React.useState(false);


    
    
    function sendData(year, make, model, miles, tripName)
    {
        if (year && make && model && miles > 0 && tripName)
        {
            console.log("Calling send data?");
        
            console.log("Year: " + year);
            console.log("Make: " + make);
            console.log("Model: " + model);
            console.log("Miles: " + miles);
            var date = Date.now().toLocaleString();
            console.log(GETDB(tripName, make, model, year, date, parseFloat(miles)))
        }
        
        
        
    }
    

    

    const [year, setYear] = React.useState('');
    const [make, setMake] = React.useState('');
    const [model, setModel] = React.useState('');
    const [miles, setMiles] = React.useState('');
    const [tripName, setTripName] = React.useState(0);

    const [json, setJson] = React.useState('');


    async function GETMakesByYear(Year) {
        var url = 'http://192.168.1.212:5000/year?';
    
        // Append parameters
        url += 'year=';
        url += Year;
    
        // GET request
        await fetch(url, {
        method: 'GET',
        })
            .then((response) => response.json())
            // Check if response is a JSON
            .then((responseJson) => {
            // Success
            //alert(JSON.stringify(responseJson));
            reply = JSON.stringify(responseJson["makes"]);
            makes = responseJson["makes"];
            console.log("CALL LOG: " + (makes));
            // console.log("Len: " + (reply.length))
            // setJson(reply)
            // console.log("PEPEPPEEPEPEP, : " + json)
            return (reply);
            })
            // Throw error
            .catch((error) => { 
            alert("Alerting 'error'")
            alert(JSON.stringify(error));
            console.error(error);
        });
        console.log("CALL LOG2: " + (reply));
        return JSON.stringify(reply);
    }

    
    return (
        <View>
            <Text style={addFormStyles.title}>Add a Trip</Text>
            <SelectDropdown dropdownStyle={addFormStyles.dropDownField}
                data={years}
                defaultButtonText="Enter Year"

                buttonTextAfterSelection={ (selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    setMakeField(false);
                    
                    if(selectedItem)
                    {
                        //setYearFetch(selectedItem);
                        // console.log("Before get");
                        let x = "notDone";
                        setYear(selectedItem)
                        GETMakesByYear(selectedItem);
                        
                        // console.log("after")
                        
                    }
                    console.log("selectedItem: " + selectedItem.toString())
                    console.log("MAKES AHH: " + (makes));
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    console.log("item: " + item)
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item
                }}
            />

            
            <SelectDropdown dropdownStyle={addFormStyles.dropDownField}                
                data={makes}
                defaultButtonText="Enter Make"
                buttonTextAfterSelection={(selectedItem, index) => {
                    console.log("makedropdown");
                    console.log("makesinthedropdown" + makes)
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to     after item is selected
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



  

