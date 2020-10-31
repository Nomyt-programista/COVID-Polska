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

import WigetRestrictions from "../components/WigetRestrictions";
import colors from "../config/colors";
import { RFValue } from "react-native-responsive-fontsize";

function Restriction(props) {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: "100%" }}>
        <View style={styles.data}>
          <WigetRestrictions></WigetRestrictions>
          <WigetRestrictions></WigetRestrictions>
          <WigetRestrictions></WigetRestrictions>
          <WigetRestrictions></WigetRestrictions>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  data: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: colors.bgColor,
    height: Dimensions.get("screen").height * 1.1,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default Restriction;
