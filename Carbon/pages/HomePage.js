import { StyleSheet, Text, View } from 'react-native';
import {ProgressChart} from "react-native-chart-kit";
import React from "react";
import { Dimensions } from 'react-native';

import { useFonts } from 'expo-font';
import {useState, useEffect} from "react";



var data = {
  labels: ["Produced"], // optional
  data: [0.32]
};

export default function HomePage() {
 
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
        setUsageLabel(usage + "/88kg")
        setUsageTextLabel((usage / 88).toString() + "% of your budget used")
        data.data = [(usage / 88)], []
      }
      )
      
    return (
        
            <View style={homeStyles.container}>
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
    }
  });