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
import { cos } from "react-native-reanimated";

let data = "";

class Restriction extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoaded: false,
      props: 0,
    };
  }
  componentDidMount() {
    this.setState({ props: this.props.data.obostrzenia });
  }
  render() {
    console.log(this.state.props);
    if (this.state.props != undefined) {
      return <Text>{this.state.props[0]}</Text>;
    }
  }
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
