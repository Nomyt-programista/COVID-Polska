import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  TouchableOpacity,
  Button,
  View,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";
import InfoText from "./infoText";

function WigetRestrictions(props) {
  const { data } = props;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity
        style={styles.object}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.title}>{data.nazwa}</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="slide">
        <SafeAreaView>
          <AntDesign
            name="downcircleo"
            size={RFValue(32)}
            color={colors.red}
            style={{ marginLeft: "5%", marginTop: "5%" }}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.infoView}>
            <Text style={styles.bigText}>{data.nazwa} </Text>
            <Text style={styles.areaText}>Strefa Czerwona </Text>
            {data.strefaczerwona.map((element, i) => {
              return <InfoText key={i} text={element}></InfoText>;
            })}
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  object: {
    marginTop: "2.5%",
    width: "95%",
    height: "4.4%",
    backgroundColor: colors.wigetColor,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  infoView: {
    alignItems: "center",
    paddingTop: "5%",
    textAlign:"center"
  },
  imageHolder: {
    width: "60%",
    height: "50%",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "10%",
  },
  title: {
    fontSize: RFValue(15),
    color: "#5A5A5A",
    textAlign:"center"
  },
  bigText: {
    fontSize: RFValue(25),
    textTransform: "capitalize",
    color: "red",
    textAlign:"center"
  },
  areaText: {
    alignSelf:"flex-start",
    marginLeft:"5%",
    marginTop:"5%",
    fontSize: RFValue(20),
    textTransform: "capitalize",
    color: colors.red,
  },
});

export default WigetRestrictions;
