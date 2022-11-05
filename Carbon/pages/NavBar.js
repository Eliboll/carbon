
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Entypo, Feather, FontAwesome5} from '@expo/vector-icons'; 

export default function NavBar() {
    return (
        <View style={{flexDirection: "row"}}>
            <View onClick={buttonClicked(1)}>
                <Entypo name="home" size={52} color="white" style={navStyles.button} />
            </View>

            <View onClick={buttonClicked(1)}>
                <Feather name="plus-circle" size={52} color="white" style={navStyles.button}/>
            </View>

            <View onClick={buttonClicked(1)}>
                <FontAwesome5 name="history" size={52} color="white" style={navStyles.button}/>
            </View>
        </View>

    );
  }

    function Home()
    {
    print("Ello")
    }

    

    function buttonClicked(num)
    {
        if(num == 1)
        {

        }
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
  