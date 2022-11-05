import * as React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, Text, View, Button } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

var navigation;

export default function NavBar({ navigation }) {
    // this.navigation = navigation;

    function buttonClicked({navigation}, num)
    {
        switch(num) {
            case 0:
                navigation.navigate('Home');
            case 1:
                navigation.navigate('Test');
            case 2:
                navigation.navigate('Test');
            default:

        }
    }

    return (
        <View style={{flexDirection: "row"}}>
            <View onClick={buttonClicked(0)}>
                <Entypo name="home" size={52} color="white" style={navStyles.button} />
            </View>

            <View onClick={buttonClicked(1)}>
                <Feather name="plus-circle" size={52} color="white" style={navStyles.button}/>
            </View>

            <View onClick={buttonClicked(2)}>
                <FontAwesome5 name="history" size={52} color="white" style={navStyles.button}/>
            </View>
        </View>

    );
}

const navStyles = StyleSheet.create({
    
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
