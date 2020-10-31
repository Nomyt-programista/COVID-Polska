import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function WigetRestrictions(props) {
  return (
    <TouchableOpacity style={styles.object}>
      <Text>ygbybhgy</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  object: {
    marginTop: "2.5%",
    width: "46%",
    height: "10%",
    backgroundColor: "blue",
    borderRadius: 10,
  },
  imageHolder: {
    width: "60%",
    height: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
});

export default WigetRestrictions;
