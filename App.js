import React, { Component } from "react";
import { View, ActivityIndicator, Button, Pressable } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Internet from "./app/components/internet"
import * as firebase from "firebase";
import firebaseConfig from "./app/config/config_firebase";

import Restriction from "./app/screens/Restriction";
import HomeScreen from "./app/screens/HomeScreen";
import Safety from "./app/screens/Safety";
import { Feather } from "@expo/vector-icons";

let data_ = "";

class Polska extends Component {
  render() {
    return <HomeScreen data={data_}></HomeScreen>;
  }
}

class Ograniczenia extends Component {
  render() {
    return <Restriction data={data_.obostrzenia}></Restriction>;
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
          } else if (route.name === "Ograniczenia") {
            return <Feather name="alert-triangle" size={size} color={color} />;
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
let internet=false;
NetInfo.fetch().then(state => {
  if(state.isConnected==true){
    internet=true;
    console.log(internet);
  }
  
});
class App extends Component {
  state = { data_: "" };

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

    this.setState({ data_ });
    setTimeout(() => {
      this.setState({ data_ });
    }, 2000);
  }
  
  render() {
    if(internet == true){
      return (

        <React.Fragment>
          {this.state.data_ === "" ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <ActivityIndicator size="large" color="red" />
            </View>
          ) : (
              <NavigationContainer>
                <MyTabs />
              </NavigationContainer>
            )}
        </React.Fragment>
      );
    }
    else{
      return (
          <Internet></Internet>
        
      );
    }
    
  }
}
export default App;
