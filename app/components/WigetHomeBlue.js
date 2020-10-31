import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

function WigetHome({ title, data }) {
  return (
    <View style={styles.viget}>
      <Text style={styles.bigText}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <FontAwesome name="stethoscope" size={RFValue(25)} color="#5cb0ff" />

        <Text style={styles.dataText}>{data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viget: {
    width: "45%",
    height: "22%",
    backgroundColor: "#FFFEFE",
    borderRadius: 10,
    marginTop: "5%",
  },
  bigText: {
    fontSize: RFValue(15),
    margin: "8%",
  },
  dataText: {
    fontSize: RFValue(20),
    color: colors.blue,
  },
});

export default WigetHome;
