import React from "react";
import { Text, View, StyleSheet } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

function InfoText(props) {
  return (
    <View style={styles.main}>
      <Text style={styles.info}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    fontSize: RFValue(17),
  },
  main: {
    width: "80%",
    paddingTop: "4%",
  },
});

export default InfoText;
