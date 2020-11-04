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
            <Text style={styles.bigText}>Strefa czerwona </Text>
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
  },
  imageHolder: {
    width: "60%",
    height: "50%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  title: {
    fontSize: RFValue(17),
    color: "#5A5A5A",
  },
  bigText: {
    fontSize: RFValue(25),
    textTransform: "capitalize",
    color: colors.red,
  },
});

export default WigetRestrictions;
