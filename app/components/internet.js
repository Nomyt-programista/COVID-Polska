import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function Internet() {
    return (
        <View style={styles.header}>
            <View style={styles.imageCointainer2}>
                <Image style={styles.image} source={require('../assets/logo.png')} />
            </View>
            <Text style={styles.Text}>Brak połączenia z internetem</Text>
            <Text style={styles.Paragraph}>Proszę połączyć się z siecią i zresetować aplikację</Text>
        </View>
    );
}

const styles = StyleSheet.create({
header:{
width:"100%",
height:"100%",
backgroundColor:colors.bgColor
},
imageCointainer:{
width:"30%",
height:"20%",
alignSelf:"center"
},
imageCointainer2: {
 width: "80%",
height: "50%",
alignSelf: "center"
},
image:{
flex: 1,
width: null,
height: null,
resizeMode: 'contain'
    
},
Text:{
    fontSize: RFValue(25),
    color: "black",
    textAlign: "center"
},
Paragraph:{
    alignSelf: "flex-start",
    fontSize: RFValue(12),
    color: "black",
    marginTop:"5%",
    alignSelf:"center"
}
});

export default Internet;
