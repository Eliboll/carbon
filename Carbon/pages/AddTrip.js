import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, TextInput, View, Button, TouchableHighlight, FlatList } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 
import {useState, useEffect} from "react";

import { readRemoteFile } from 'react-native-csv';

import SelectDropdown from 'react-native-select-dropdown';

import GETDB from './GETDB';
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
let makes = ["Toyota","Kia","Mercedes-Benz","Jaguar","Land Rover","Hyundai","BMW","Acura","Jeep","Nissan","Genesis","Aston Martin","Audi","Lamborghini","Chevrolet","Cadillac","Subaru","Buick","Lexus","Ford","Mitsubishi","Lincoln","Volvo","GMC","Alfa Romeo","Infiniti","Porsche","Fiat","Honda","Ram","Ferrari","MINI","Mazda","Maserati","Dodge","Chrysler","Lotus","Bentley","Rolls-Royce","BYD","Volkswagen","Bugatti","Tesla","Karma","Roush Performance","McLaren Automotive","Polestar","Pagani","RUF Automobile","Koenigsegg"];
let models = ["GR Supra","Corolla","Corolla XLE","Corolla Hybrid","Corolla XSE","Corolla Hatchback","Corolla Hatchback XSE","RAV4 Prime 4WD","Prius","Prius AWD","Prius Eco","Prius Prime","Venza AWD","Avalon XLE","Avalon","Avalon Hybrid","Avalon Hybrid XLE","Avalon AWD","Avalon TRD","RAV4","RAV4 AWD","RAV4 AWD TRD OFFROAD","RAV4 AWD LE","RAV4 Hybrid  AWD","4Runner 2WD","4Runner 4WD","C-HR","Tundra 2WD","Tundra 4WD","Land Cruiser Wagon 4WD","Tacoma 2WD","Tacoma 4WD","Tacoma 4WD D-CAB MT TRD-ORP/PRO","Highlander","Highlander Hybrid","Highlander AWD","Highlander Hybrid AWD","Highlander Hybrid AWD LTD/PLAT","Sequoia 2WD","Sequoia 4WD","Corolla APEX","Camry","Camry TRD","Camry XSE","Camry LE/SE","Camry XLE/XSE","Camry Hybrid LE","Camry Hybrid SE/XLE/XSE","Camry AWD LE/SE","Camry AWD XLE/XSE","Sienna Hybrid 2WD","Sienna Hybrid AWD"]
let currentYear = 2022

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
            //alert("Alerting 'error'")
            //alert(JSON.stringify(error));
            console.error(error);
        });
        console.log("CALL LOG2: " + (reply));
        return JSON.stringify(reply);
    }

    async function GETModelsByYearMake(Year, Make) {
        var url = 'http://192.168.1.212:5000/yearmake?';
    
        // Append parameters
        url += 'year=';
        url += Year;
        url += '&make=';
        url += Make;
    
        // GET request
        await fetch(url, {
        method: 'GET',
        })
            .then((response) => response.json())
            // Check if response is a JSON
            .then((responseJson) => {
            // Success
            reply = JSON.stringify(responseJson["models"]);
            models = responseJson["models"];
            console.log("CALL LOG3: " + (models));
            return (reply);
            })
            // Throw error
            .catch((error) => { 
            //alert("Alerting 'error'")
            //alert(JSON.stringify(error));
            console.error(error);
        });
        console.log("CALL LOG4: " + (reply));
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
                        currentYear = selectedItem;
                        
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
                    if(selectedItem)
                    {
                        let y = "notDone";
                        setMake(selectedItem)
                        GETModelsByYearMake(currentYear, selectedItem);                
                    }
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
                data={models}
                defaultButtonText="Enter Model"
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



  

