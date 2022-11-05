import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dimensions, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

export default function NavBar({ navigation }) {
    // this.navigation = navigation;

    function buttonClicked({navigation}, num)
    {
        // alert('You didnt tap the button!');
        switch(num) {
            case 0:
                alert('Home!');
                return () => navigation.navigate('Home');
            case 1:
                alert('Test2!');
                return () => navigation.navigate('Test');
            case 2:
                alert('Test3!');
                return () => navigation.navigate('Test');
            default:

        }
    }

    return (
        <View style={{flexDirection: "row"}}>
            <TouchableHighlight onPress={buttonClicked({navigation}, 0)}>
                <View >
                    <Entypo name="home" size={52} color="white" style={navStyles.button} />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={buttonClicked({navigation}, 1)}>
                <View >
                    <Feather name="plus-circle" size={52} color="white" style={navStyles.button}/>
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={buttonClicked({navigation}, 2)}>
                <View >
                    <FontAwesome5 name="history" size={52} color="white" style={navStyles.button}/>
                </View>
            </TouchableHighlight>
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
        textAlign: 'center',
    },

    
});
