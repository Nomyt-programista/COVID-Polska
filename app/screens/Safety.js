import React, { Component } from "react";
import {
  StyleSheet,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
  View,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";

import colors from "../config/colors";
import { RFValue } from "react-native-responsive-fontsize";

class Safety extends Component {
  render() {
    const screenHeight = Dimensions.get("window").height;

    return (
      <SafeAreaView>
        <ScrollView style={{ height: "100%" }}>
          <View style={styles.data}>
            <View style={styles.Header}>
              <Text style={styles.HeaderText}>Bezpieczeństwo</Text>
            </View>

            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/1.png")}
                ></Image>
              </View>

              <Text style={styles.textHolder}>
                Pamietaj o maseczce. Pomoże ona chronić Ciebie i innych
              </Text>
            </View>
            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/2.png")}
                ></Image>
              </View>
              <Text style={styles.textHolder}>
                Ogranicz wychodzenie z domu do minimum.
              </Text>
            </View>
            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/3.png")}
                ></Image>
              </View>
              <Text style={styles.textHolder}>
                W razie podejrzenia zakażeniem zadzwoń pod 800 190 590
              </Text>
            </View>
            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/4.png")}
                ></Image>
              </View>
              <Text style={styles.textHolder}>
                Myj dokładnie jedzenie przed spożyciem
              </Text>
            </View>
            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/5.png")}
                ></Image>
              </View>
              <Text style={styles.textHolder}>
                Często myj ręcę. Obowiązkowo przed jedzeniem oraz po przyjściu
                do domu
              </Text>
            </View>
            <View style={styles.object}>
              <View style={styles.imageHolder}>
                <Image
                  resizeMode="contain"
                  style={{ flex: 1 }}
                  source={require("../assets/6.png")}
                ></Image>
              </View>
              <Text style={styles.textHolder}>
                W miejscach publicznych zachowaj odstęp 1.5 metra
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main_conteiner: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "space-evenly",
    height: "10%",
    backgroundColor: "blue",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "#F5F5F6",
  },
  HeaderText: {
    fontSize: RFValue(30),
    marginLeft: "6%",
    color: "rgba(359, 72, 100, 100)",
  },
  Header: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
  },
  object: {
    marginTop: "2.5%",
    width: "46%",
    height: "20%",
    backgroundColor: "#FFFEFE",
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
  textHolder: {
    margin: "7%",
    marginTop: "5%",
    fontSize: RFValue(10),
    textAlign: "center",
  },
  data: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: colors.bgColor,
    height: Dimensions.get("screen").height * 1.1,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  //   main_conteiner: {
  //     justifyContent: "space-around",
  //     alignItems: "flex-start",
  //     backgroundColor: "red",
  //     height: Dimensions.get("screen").height * 2,
  //     width: Dimensions.get("screen").width,
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //   },
});

export default Safety;
