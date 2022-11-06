import { StyleSheet, Text, View, Button} from 'react-native';
import {ProgressChart} from "react-native-chart-kit";
import React from "react";
import { Dimensions } from 'react-native';

import { useFonts } from 'expo-font';
import {useState, useEffect} from "react";





export default function HomePage() {
  var data = {
    labels: ["Produced"], // optional
    data: [60/88]
  };
  
  function updateLabels()
{
  //setUsage(parseFloat(JSON.stringify(responseJson["current"])));
  //data.data = (usage / 88);
  setUsageLabel("60.9kg" + "/88kg")
  setUsageTextLabel("68.2" + "% of your budget used")

}
  useEffect(() => {
    // write your code here, it's like componentWillMount
    updateLabels()
    }, [])

  async function GetUsage() {
    var url = 'http://192.168.1.212:5000/carbonstats';

    console.log("HIT SECRET BUTTONS")

    // GET request
    await fetch(url, {
    method: 'GET',
    })
        .then((response) => response.json())
        // Check if response is a JSON
        .then((responseJson) => {
        // Success
        //alert(JSON.stringify(responseJson));
        //reply = JSON.stringify(responseJson["makes"]);
        setUsage(parseFloat(Math.round(JSON.stringify(responseJson["current"]) * 100)/100));
        // setUsageTextLabel((usage / 88).toString() + "% of your budget used")
        set
        setUsageLabel( "60kg/88kg");
        //setUsageTextLabel()
        console.log("CALL LOG: " + (usage));
        // console.log("Len: " + (reply.length))
        // setJson(reply)
        // console.log("PEPEPPEEPEPEP, : " + json)
        return ("reply");
        })
        // Throw error
        .catch((error) => { 
        //alert("Alerting 'error'")
        //alert(JSON.stringify(error));
        console.error(error);
    });
    console.log("CALL LOG2: " + (reply));
    return ("reply");
}

GetUsage();
  const [usage, setUsage] = useState(0);
  const [usageLabel, setUsageLabel] = useState('');
  const [usageTextLabel, setUsageTextLabel] = useState('');
  

    const [fontsLoaded] = useFonts({
        'Quicksand': require('../assets/Quicksand.ttf'),
        'Codystar': require('../assets/Codystar-Regular.ttf'),
      });
      
      chartConfig={
        backgroundColor: "#444",
        backgroundGradientFrom: "#444",
        backgroundGradientTo: "#444",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
          borderRadius: 0,
          width: Dimensions.get('screen').width * 0.8
        },
        propsForDots: {
          r: "8",
          strokeWidth: "2",
          stroke: "#ffa726"
        }
      };
      useState(() => {
        //setUsageLabel(usage + "/88kg")
        setUsageTextLabel((54 / 88).toString() + "% of your budget used")
        //data.data = [(usage / 88)], [usage]
      }
      )
      useState(() => {
        GetUsage();
      }
      )

      
    return (
        
            <View style={homeStyles.container}>
              <Button style={homeStyles.hidden} title="" onClick={GetUsage()} ></Button>
                <Text style={homeStyles.title}>Car-bon</Text>
                <ProgressChart
                    data={data}
                    width={Dimensions.get('screen').width}
                    height={220}
                    strokeWidth={24}
                    radius={96}
                    chartConfig={chartConfig}
                    hideLegend={true}
                />
                <Text style={homeStyles.percentText}>
                    {usageLabel}
                </Text>
                <Text style={homeStyles.chartText}>
                    {usageTextLabel}
                </Text>
            </View>
        
    );
}




const homeStyles = StyleSheet.create({
    
    container: {
      flex: 1,
      backgroundColor: '#444',
    },
    title:
    {
        color: 'green',
        fontSize: 64,
        textAlign: 'center',
        marginTop: 32,
        fontFamily: 'Quicksand',
        marginBottom: 16
    },
    percentText:
    {
        marginTop: -132,
        marginBottom: 100,
        textAlign: 'center',
        color: 'white',
        fontSize: 28,
        fontFamily: 'Quicksand'
        
    },
    chartText:
    {
        marginTop: 150,
        textAlign: 'center',
        color: 'white',
        fontSize: 24,
        fontFamily: 'Quicksand'
    },
    hidden:
    {
      backgroundColor: '#444'
    }
  });