import React, { Component } from "react";
import HomeScreen from "./app/screens/HomeScreen";
import Safety from "./app/screens/Safety";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as firebase from "firebase";
import firebaseConfig from "./app/config/config_firebase";
import Restriction from "./app/screens/Restriction";

var data_ = "";
class Polska extends Component {
  render() {
    return <HomeScreen data={data_}></HomeScreen>;
  }
}

class Ograniczenia extends Component {
  render() {
    return <Restriction></Restriction>;
  }
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Bezpieczeństwo") {
            iconName = focused ? "ios-medkit" : "ios-medkit";
          } else if (route.name === "Polska") {
            iconName = focused ? "ios-home" : "ios-home";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#fe484a",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Polska" component={Polska} />
      <Tab.Screen name="Bezpieczeństwo" component={Safety} />
      <Tab.Screen name="Ograniczenia" component={Ograniczenia} />
    </Tab.Navigator>
  );
}

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .database()
      .ref("dataDzis/")
      .on("value", function (snapshot) {
        data_ = snapshot.val();
      });
  }
  render() {
    return (
      <React.Fragment>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </React.Fragment>
    );
  }
}
export default App;
