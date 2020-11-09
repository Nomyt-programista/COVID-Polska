import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Entypo, AntDesign } from "@expo/vector-icons";
import colors from "../config/colors";

import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Dimensions,
  Modal,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

function WigetInfo() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.source}>
        <Entypo
          name="info-with-circle"
          size={24}
          color={colors.red}
          onPress={() => setModalVisible(true)}
        />
        <Text
          style={{ color: colors.red }}
          onPress={() => setModalVisible(true)}
        >
          Źródło
        </Text>
      </View>
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
            <Text style={styles.areaText}>
              Dane dotyczące "ilości chorych łącznie", "ilości zgonów łącznie"
              oraz dane w zakładce Ograniczenia pochodzą ze strony "www.gov.pl"
            </Text>
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  source: {
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
  },
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
    width: "95%",
    textAlign: "center",
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
    textAlign: "center",
  },
  bigText: {
    fontSize: RFValue(25),
    textTransform: "capitalize",
    color: "red",
    textAlign: "center",
  },
  areaText: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginTop: "5%",
    fontSize: RFValue(20),

    color: colors.red,
  },
});

export default WigetInfo;
