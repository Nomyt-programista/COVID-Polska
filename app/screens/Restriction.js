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
  TouchableNativeFeedbackBase,
} from "react-native";

import WigetRestrictions from "../components/WigetRestrictions";
import colors from "../config/colors";
import { RFValue } from "react-native-responsive-fontsize";

class Restriction extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>Ograniczenia</Text>
          </View>
          <View style={styles.data}>
            {data.map((element, i) => {
              return (
                <WigetRestrictions key={i} data={element}></WigetRestrictions>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  data: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: colors.bgColor,
    height: Dimensions.get("screen").height * 1.9,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  HeaderText: {
    fontSize: RFValue(30),
    marginLeft: "6%",
    color: colors.red,
  },
  Header: {
    width: "100%",
    height: "5%",
    justifyContent: "center",
  },
});

export default Restriction;
