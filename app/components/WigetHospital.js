import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";

function WigetHospital(props) {
  return (
    <TouchableOpacity
      style={styles.object}
      onPress={() => setModalVisible(true)}
    >
      <Text style={styles.title}>{data.nazwa}</Text>
    </TouchableOpacity>
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
  title: {
    fontSize: RFValue(17),
    color: "gray",
  },
});

export default WigetHospital;
