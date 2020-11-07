import React, { Component } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesome } from "@expo/vector-icons";
import * as firebase from "firebase";
import firebaseConfig from "../config/config_firebase";

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

import Svg, { Path, G } from "react-native-svg";

import colors from "../config/colors";
import WigetHomeBlue from "../components/WigetHomeBlue";
import WigetHomeRed from "../components/WigetHomeRed";

let data = "";

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      now: { id: "" },
      newstate: [
        { Bilanszachorowań: "" },
        { Bilanszgonów: "" },
        { Liczbazgonów: "" },
        { Liczba: "" },
        { Przewidywanezachorowania: "" },
        { Przewidywanezgony: "" },
        { color: "" },
        { nazwa: "" },
        { strefa: "Wybierz województwo" },
      ],
      color: [
        { id0: "#FE484A" },
        { id1: "#FE484A" },
        { id2: "#FE484A" },
        { id3: "#FE484A" },
        { id4: "#FE484A" },
        { id5: "#FE484A" },
        { id6: "#FE484A" },
        { id7: "#FE484A" },
        { id8: "#FE484A" },
        { id9: "#FE484A" },
        { id10: "#FE484A" },
        { id11: "#FE484A" },
        { id12: "#FE484A" },
        { id13: "#FE484A" },
        { id14: "#FE484A" },
        { id15: "#FE484A" },
        { id16: "#FE484A" },
      ],
    };
  }

  componentDidMount() {
    const { data } = this.props;
    const ID = "id16";
    this.setState({ now: { id: ID } });

    let dataNew = "";

    var newstate = [...this.state.newstate];
    var color = [...this.state.color];

    color[0].id0 = data.id0.color;
    color[1].id1 = data.id1.color;
    color[2].id2 = data.id2.color;
    color[3].id3 = data.id3.color;
    color[4].id4 = data.id4.color;
    color[5].id5 = data.id5.color;
    color[6].id6 = data.id6.color;
    color[7].id7 = data.id7.color;
    color[8].id8 = data.id8.color;
    color[9].id9 = data.id9.color;
    color[10].id10 = data.id10.color;
    color[11].id11 = data.id11.color;
    color[12].id12 = data.id12.color;
    color[13].id13 = data.id13.color;
    color[14].id14 = data.id14.color;
    color[15].id15 = data.id15.color;
    color[16].id16 = "#fcd303";

    dataNew = data.id16;

    newstate[0].Bilanszachorowań = dataNew.Bilanszachorowań;
    newstate[1].Bilanszgonów = dataNew.Bilanszgonów;
    newstate[2].Liczbazgonów = dataNew.Liczbazgonów;
    newstate[3].Liczba = dataNew.Liczba;
    newstate[4].Przewidywanezachorowania = dataNew.Przewidywanezachorowania;
    newstate[5].Przewidywanezgony = dataNew.Przewidywanezgony;
    newstate[6].color = dataNew.color;
    newstate[7].nazwa = dataNew.nazwa;

    if (ID === "id16") {
      newstate[8].strefa = "";
    } else {
      newstate[8].strefa = dataNew.strefa;
    }

    this.setState({ newstate });
    this.setState({ color });
  }

  render() {
    const { data } = this.props;

    const onPress = (ID) => {
      this.setState({ now: { id: ID } });

      let dataNew = "";

      var newstate = [...this.state.newstate];
      var color = [...this.state.color];

      color[0].id0 = data.id0.color;
      color[1].id1 = data.id1.color;
      color[2].id2 = data.id2.color;
      color[3].id3 = data.id3.color;
      color[4].id4 = data.id4.color;
      color[5].id5 = data.id5.color;
      color[6].id6 = data.id6.color;
      color[7].id7 = data.id7.color;
      color[8].id8 = data.id8.color;
      color[9].id9 = data.id9.color;
      color[10].id10 = data.id10.color;
      color[11].id11 = data.id11.color;
      color[12].id12 = data.id12.color;
      color[13].id13 = data.id13.color;
      color[14].id14 = data.id14.color;
      color[15].id15 = data.id15.color;
      color[16].id16 = data.id16.color;

      if (ID === "id0") {
        dataNew = data.id0;
        color[0].id0 = "#fcd303";
      }
      if (ID === "id1") {
        dataNew = data.id1;
        color[1].id1 = "#fcd303";
      }
      if (ID === "id2") {
        dataNew = data.id2;
        color[2].id2 = "#fcd303";
      }
      if (ID === "id3") {
        dataNew = data.id3;
        color[3].id3 = "#fcd303";
      }
      if (ID === "id4") {
        dataNew = data.id4;
        color[4].id4 = "#fcd303";
      }
      if (ID === "id5") {
        dataNew = data.id5;
        color[5].id5 = "#fcd303";
      }
      if (ID === "id6") {
        dataNew = data.id6;
        color[6].id6 = "#fcd303";
      }
      if (ID === "id7") {
        dataNew = data.id7;
        color[7].id7 = "#fcd303";
      }
      if (ID === "id8") {
        dataNew = data.id8;
        color[8].id8 = "#fcd303";
      }
      if (ID === "id9") {
        dataNew = data.id9;
        color[9].id9 = "#fcd303";
      }
      if (ID === "id10") {
        dataNew = data.id10;
        color[10].id10 = "#fcd303";
      }
      if (ID === "id11") {
        dataNew = data.id11;
        color[11].id11 = "#fcd303";
      }
      if (ID === "id12") {
        dataNew = data.id12;
        color[12].id12 = "#fcd303";
      }
      if (ID === "id13") {
        dataNew = data.id13;
        color[13].id13 = "#fcd303";
      }
      if (ID === "id14") {
        dataNew = data.id14;
        color[14].id14 = "#fcd303";
      }
      if (ID === "id15") {
        dataNew = data.id15;
        color[15].id15 = "#fcd303";
      }
      if (ID === "id16") {
        dataNew = data.id16;
        color[16].id16 = "#fcd303";
      }

      newstate[0].Bilanszachorowań = dataNew.Bilanszachorowań;
      newstate[1].Bilanszgonów = dataNew.Bilanszgonów;
      newstate[2].Liczbazgonów = dataNew.Liczbazgonów;
      newstate[3].Liczba = dataNew.Liczba;
      newstate[4].Przewidywanezachorowania = dataNew.Przewidywanezachorowania;
      newstate[5].Przewidywanezgony = dataNew.Przewidywanezgony;
      newstate[6].color = dataNew.color;
      newstate[7].nazwa = dataNew.nazwa;

      if (ID === "id16") {
        newstate[8].strefa = "";
      } else {
        newstate[8].strefa = dataNew.strefa;
      }

      this.setState({ newstate });
      this.setState({ color });
    };

    return (
      <SafeAreaView style={styles.main_conteiner}>
        <ScrollView>
          <View style={styles.viget4}>
            <Text style={styles.bigText}>{this.state.newstate[8].strefa}</Text>
          </View>

          <TouchableOpacity
            style={{ marginTop: "5%" }}
            onPress={() => onPress("id16")}
          >
            <View style={styles.polska}>
              <FontAwesome
                name="flag"
                size={24}
                color={this.state.color[16].id16}
                onPress={() => onPress("id16")}
              />
              <Text
                style={{ color: this.state.color[16].id16 }}
                onPress={() => onPress("id16")}
              >
                Polska
              </Text>
            </View>

            <Svg
              xmlns="http://www.w3.org/2000/svg"
              width={Dimensions.get("screen").width}
              height={Dimensions.get("screen").width}
              viewBox="0 0 512.001 512.001"
              version="1"
            >
              <G onPress={() => onPress("id0")}>
                <Path
                  fill={this.state.color[0].id0}
                  fillOpacity="1"
                  d="M426.61 454.213c-3.874-1.34-8.198-2.766-9.607-3.168-1.409-.402-4.003-1.661-5.764-2.798-1.761-1.137-5.336-2.72-7.945-3.518-2.721-.833-5.086-2.476-5.55-3.856-1.334-3.966-9.367-10.748-12.732-10.748-1.696 0-3.47-.59-3.943-1.312-.493-.753-3.662-1.154-7.44-.94-3.62.205-7.48-.156-8.578-.803-2.252-1.329-6.785-12.496-8.95-22.049-.918-4.047-2.334-6.811-3.895-7.6-2.929-1.48-3.211-4.248-.531-5.219 1.057-.383 1.921-1.463 1.921-2.4 0-.937-.864-2.38-1.921-3.209-1.283-1.005-1.922-3.72-1.922-8.17 0-3.665-.65-8.716-1.447-11.224-1.328-4.185-1.141-4.99 2.265-9.778 2.041-2.87 7.046-7.424 11.121-10.122 4.076-2.698 8.677-6.844 10.225-9.214 9.182-14.058 10.48-15.503 13.948-15.542 1.896-.02 3.803-.582 4.238-1.247.436-.665 1.91-1.21 3.278-1.21 2.104 0 2.487.864 2.487 5.611 0 6.452 2.24 8.801 8.448 8.862 3.425.033 8.204 3.035 8.204 5.153 0 .38-2.017 1.816-4.483 3.19-3.699 2.06-4.484 3.202-4.484 6.528 0 5.321 1.959 6.933 8.426 6.933 2.944 0 7.421.816 9.95 1.814 2.53.997 7.94 1.814 12.022 1.814 6.373 0 7.602-.372 8.688-2.622 2.781-5.767 8.53-5.913 15.118-.385l3.606 3.026-5.721 7.103c-3.147 3.906-6.441 8.39-7.32 9.966-.88 1.575-2.007 3.136-2.504 3.468-1.362.91-11.522 17.014-11.522 18.262 0 .597-.482 1.086-1.072 1.086-.59 0-3.019 3.51-5.398 7.802l-4.327 7.803 2.298 6.032c1.724 4.527 2.079 7.685 1.421 12.655-1.014 7.664 1.613 13.43 6.666 14.627 2.28.54 2.974 1.546 2.974 4.31 0 4.252-.84 4.342-10.248 1.089z"
                ></Path>
              </G>

              <G onPress={() => onPress("id1")}>
                <Path
                  fill={this.state.color[1].id1}
                  fillOpacity="1"
                  d="M290.12 445.773c-2.31-2.41-3.388-2.47-8.898-.492-2.106.756-2.277.63-.96-.71.88-.895 1.6-4.24 1.6-7.432 0-5.799-.003-5.805-4.369-5.805-5.323 0-11.002-5.598-11.002-10.846 0-1.912-.842-3.71-1.921-4.102-1.057-.382-1.921-1.72-1.921-2.972 0-5.59-2.758-9.703-7.775-11.598-4.633-1.75-5.035-2.271-5.035-6.538 0-3.362-.866-5.404-3.153-7.432l-3.153-2.796 2.833-3.471c1.558-1.91 4.994-5.688 7.636-8.396 5.066-5.194 6.102-8.836 2.848-10.014-3.52-1.276 7.185-9.224 12.423-9.224 5.446 0 11.088-2.367 12.002-5.035.52-1.515 2.596-2.111 8.424-2.418 10.416-.549 11.378.142 11.378 8.16 0 6.253 2.22 11.704 5.735 14.087 2.203 1.493 10.963 1.025 14.563-.778 3.398-1.702 19.756-6.761 21.86-6.761 1.539 0 2.934 7.516 3.17 17.075.116 4.69.915 8.822 1.93 9.976 1.136 1.292 1.237 1.97.294 1.97-2.577 0-1.692 8.25 1.033 9.627 1.631.825 2.981 3.574 3.976 8.096.828 3.767 2.613 9.287 3.967 12.267 1.353 2.98 2.15 5.712 1.772 6.069-.378.357-4.428.552-8.999.433-7.93-.206-8.31-.086-8.31 2.62 0 6.176-8.514 9.133-11.44 3.972-1.498-2.642-2.455-2.877-12.252-3.003-9.98-.128-10.755.047-12.712 2.866-1.146 1.652-3.097 3.003-4.335 3.003-1.41 0-3.477 2.26-5.533 6.05-3.275 6.034-3.289 6.042-5.675 3.552z"
                ></Path>
              </G>

              <G onPress={() => onPress("id2")}>
                <Path
                  fill={this.state.color[2].id2}
                  fillOpacity="1"
                  d="M239.591 430.227c0-.609-2.277-3.145-5.062-5.635-4.214-3.77-5.126-5.437-5.444-9.954-.237-3.367-1.11-5.743-2.303-6.262-9.921-4.314-9.607-3.955-9.607-10.963 0-6.425-.095-6.597-3.843-6.983-2.114-.217-4.39-.897-5.06-1.511-.67-.614-2.57-1.116-4.224-1.116-3.625 0-14.543-10.368-13.533-12.852.37-.912 2-1.659 3.621-1.659s5.93-1.46 9.575-3.246c5.921-2.9 6.545-3.576 5.857-6.348-2.192-8.83-2.238-11.69-.212-13.277 1.13-.885 2.054-2.345 2.054-3.244 0-.9 1.73-2.479 3.843-3.51 2.114-1.033 3.843-2.207 3.843-2.61 0-1.247-5.591-9.458-6.749-9.91-.601-.236-.169-1.393.961-2.571 1.13-1.18 2.4-4.251 2.822-6.828.422-2.576 1.904-5.716 3.294-6.976 2.004-1.818 2.395-3.385 1.892-7.592-.73-6.113.99-7.65 8.555-7.65 3.437 0 5.05.74 6.654 3.049 1.847 2.661 2.953 3.022 8.712 2.845 7.797-.24 11.906 1.805 12.99 6.466.63 2.703 1.487 3.36 4.386 3.36 2.022 0 3.928.796 4.342 1.813.405.998 1.565 1.814 2.577 1.814 1.4 0 1.679 1.13 1.168 4.725-.598 4.212-.204 5.12 3.63 8.353 4.127 3.481 4.211 3.722 2.074 5.951-2.736 2.854-2.88 6.204-.305 7.137 5.423 1.964-2.42 7.018-9.07 5.845-3.166-.558-4.674.199-9.824 4.931-6.487 5.96-7.218 7.465-4.164 8.571 2.84 1.03 2.383 2.477-2.241 7.088-10.63 10.599-12.216 14.853-6.791 18.209 2.442 1.51 3.222 3.167 3.522 7.484.358 5.137.714 5.647 4.859 6.959 3.353 1.06 4.914 2.512 6.24 5.8 2.24 5.558 1.379 7.6-4.283 10.15-3.007 1.353-5.265 3.597-6.691 6.648-1.597 3.418-2.916 4.606-5.109 4.606-1.625 0-2.956-.498-2.956-1.107z"
                ></Path>
              </G>

              <G onPress={() => onPress("id3")}>
                <Path
                  fill={this.state.color[3].id3}
                  fillOpacity="1"
                  d="M178.329 382.585c-1.532-1.539-2.785-3.424-2.785-4.19 0-.764-1.153-1.973-2.562-2.685-1.41-.711-2.562-1.87-2.562-2.574 0-.704 1.153-1.564 2.562-1.912 1.903-.47 2.562-1.65 2.562-4.587v-3.955l-8.832-.471c-8.314-.444-9.13-.754-13.949-5.302-5.21-4.918-8.22-6.741-14.928-9.042l-3.763-1.29 4.084-2.345c2.34-1.343 4.083-3.348 4.083-4.696 0-1.45 1.02-2.5 2.66-2.739 2.471-.359 6.018-7.178 8.41-16.17.364-1.365 3.21-5.102 6.324-8.305 3.115-3.202 5.663-6.827 5.663-8.056 0-1.228 1.153-2.815 2.562-3.527 2.728-1.378 3.532-4.837 1.124-4.837-.993 0-.945-.56.157-1.814.877-.997 3.253-1.813 5.28-1.813 2.833 0 3.687.56 3.687 2.418 0 2.088.854 2.418 6.248 2.418 3.99 0 6.824-.655 7.842-1.813 1.788-2.034 9.666-2.472 10.888-.605.436.665 2.686 1.21 5.001 1.21 4.74 0 8.45 3.063 8.45 6.976 0 1.405.576 2.89 1.28 3.302 1.996 1.164 1.514 3.926-1.099 6.3-1.31 1.19-2.726 4.272-3.148 6.849-.422 2.576-1.656 5.612-2.743 6.745-2.049 2.137-2.736 7.313-.972 7.313.553 0 1.977 1.552 3.164 3.45 2.112 3.375 2.09 3.48-1.005 4.811-1.74.748-3.163 2.122-3.163 3.052 0 .93-.938 2.426-2.083 3.324-1.695 1.328-1.948 3.157-1.356 9.822.559 6.286.339 8.19-.947 8.19-.92 0-3.14 1.088-4.93 2.418-1.792 1.33-5.001 2.419-7.132 2.419-4.127 0-6.124 2.875-4.829 6.953.679 2.135-3.114 7.557-5.285 7.557-.645 0-2.426-1.26-3.958-2.799z"
                ></Path>
              </G>

              <G onPress={() => onPress("id4")}>
                <Path
                  fill={this.state.color[4].id4}
                  fillOpacity="1"
                  d="M116.666 371.524c-1.435-1.441-2.608-3.88-2.608-5.419 0-2.51-4.213-8.116-11.509-15.31-3.613-3.564-3.219-5.982 1.261-7.733 3.327-1.301 3.843-2.127 3.843-6.146 0-3.22-.86-5.4-2.803-7.109-3.002-2.64-6.793-3.229-8.085-1.256-2.307 3.524-16.012-1.204-16.012-5.524 0-1.151-1.41-1.731-4.212-1.731-9.443 0-21.407-9.272-21.407-16.59 0-2.317-.603-2.871-2.882-2.647-1.585.157-4.512-.455-6.504-1.36-4.899-2.222-7.793-.375-8.304 5.302-.34 3.768-.854 4.412-3.523 4.412-3.783 0-3.918-1.14-.607-5.114 1.385-1.662 3.467-5.68 4.627-8.93 1.16-3.25 3.196-8.051 4.527-10.67 2.793-5.498 3.028-8.085.916-10.079-1.139-1.075-1.146-2.157-.027-4.474 1.497-3.103 4.572-4.047 6.013-1.846 2.419 3.694 12.17-.443 12.17-5.164 0-3.358 2.508-3.59 3.813-.35.685 1.702 1.981 3.088 2.88 3.079 4.714-.048 7.388-1.736 8.702-5.495.778-2.226 2.531-4.382 3.896-4.79 1.69-.507 2.742-2.283 3.298-5.566.574-3.384 1.338-4.633 2.564-4.189.96.348 1.746.106 1.746-.539 0-.644.078-1.579.172-2.078.316-1.663 4.463-3.768 8.184-4.153 3.403-.353 3.76.008 4.796 4.83 1.441 6.709 4.42 6.433 8.072-.747l2.65-5.21 5.356 5.485c2.946 3.017 5.356 6.58 5.356 7.918 0 1.601 2.355 3.91 6.887 6.75 9.23 5.785 18.944 6.93 25.907 3.05l4.766-2.653 2.676 2.634c1.887 1.857 2.204 2.8 1.074 3.198-.88.31-1.6 1.814-1.6 3.342 0 2.275 1.022 3.022 5.64 4.12 5.56 1.321 5.646 1.421 6.167 7.096.291 3.166.78 6.572 1.086 7.57.41 1.337-.453 1.792-3.287 1.73-4.267-.093-6.942 2.336-7.004 6.36-.022 1.458-.617 2.986-1.322 3.397-.704.411-1.28 1.74-1.28 2.952s-2.55 4.824-5.664 8.027c-3.115 3.202-5.96 6.94-6.324 8.305-2.392 8.992-5.939 15.81-8.41 16.17-1.658.24-2.66 1.287-2.66 2.777 0 1.39-1.605 3.252-3.835 4.45-2.109 1.133-3.838 2.78-3.842 3.658-.005.879-.873 2.414-1.93 3.412-2.97 2.803-2.317 5.205 2.562 9.424 5.614 4.854 5.64 6.413.119 7.39-2.4.426-6.415 2.547-8.921 4.714l-4.557 3.94-2.607-2.62z"
                ></Path>
              </G>

              <G onPress={() => onPress("id5")}>
                <Path
                  fill={this.state.color[5].id5}
                  fillOpacity="1"
                  d="M309.374 366.32c-3.52-2.385-5.735-7.833-5.735-14.104 0-8.31-1.543-9.268-13.577-8.427-9.518.666-13.909-.658-11.07-3.337 2.92-2.757 1.849-7.853-2.352-11.19-3.726-2.96-3.86-3.363-2.463-7.362.814-2.328 1.919-4.232 2.456-4.232 1.279 0 3.949-5.58 3.949-8.25 0-1.711.933-2.008 5.124-1.63l5.124.46v-4.834c0-3.158-.66-5.073-1.9-5.523-1.081-.391-1.574-1.49-1.144-2.548.537-1.322 2.565-1.86 7.023-1.86 5.341 0 6.268-.345 6.268-2.336 0-1.285 1.153-2.682 2.562-3.105 1.41-.422 2.562-1.752 2.562-2.956 0-5.4 6.822-5.9 8.23-.602.457 1.72 2.024 3.213 3.817 3.638 1.673.396 4.32 2.107 5.88 3.802 2.584 2.804 3.471 3.02 9.889 2.394 6.078-.592 7.134-.386 7.655 1.496.346 1.25 2.686 2.772 5.472 3.56 2.677.757 5.583 2.19 6.457 3.184 2.052 2.335 8.189 2.331 10.243-.005.877-.998 3.414-1.814 5.638-1.814 3.982 0 4.089.155 7.118 10.351 3.029 10.192 3.04 10.411.704 14.209-1.304 2.121-3.141 4.294-4.082 4.828-.94.535-2.831 3.046-4.2 5.58-1.494 2.763-4.994 6.124-8.742 8.395-6.435 3.898-13.089 10.114-13.089 12.227 0 .659-1.585 1.53-3.522 1.935-7.977 1.672-21.679 5.683-24.856 7.277-3.715 1.863-7.393 2.167-9.44.78z"
                ></Path>
              </G>

              <G onPress={() => onPress("id6")}>
                <Path
                  fill={this.state.color[6].id6}
                  fillOpacity="1"
                  d="M424.049 355.758c-2.466-.896-6.818-1.67-9.672-1.721-9.238-.164-11.171-5.27-3.47-9.162 2.632-1.33 4.988-3.419 5.236-4.642.684-3.37-4.685-8.048-9.29-8.093-6.184-.06-8.423-2.416-8.423-8.861v-5.61h-5.049c-2.776 0-5.404.543-5.84 1.208-.435.665-1.827 1.21-3.093 1.21-3.542 0-7.084-13.838-6.652-25.987.19-5.315.953-10.018 1.698-10.452.795-.464.99-2.215.472-4.244-.484-1.9-1.44-6.447-2.125-10.104-.877-4.686-2.182-7.38-4.418-9.115-4.04-3.136-4.058-5.396-.045-5.396 4.52 0 7.118-4.265 7.118-11.685 0-3.471.577-6.647 1.281-7.058 1.836-1.07 1.584-7.546-.32-8.25-.88-.326.284-.986 2.588-1.467 2.305-.48 4.5-1.347 4.88-1.927.379-.579 4.114-1.053 8.3-1.053 4.219 0 7.61-.538 7.61-1.209 0-.665 2.344-1.21 5.21-1.21 4.627 0 5.119-.27 4.396-2.418-.567-1.688-.23-2.418 1.12-2.418 1.062 0 2.288.544 2.723 1.21 1.118 1.706 5.985 1.432 8.666-.488 1.244-.891 3.592-4.003 5.218-6.915 3.334-5.969 7.727-7.416 12.645-4.164 1.575 1.04 3.798 1.893 4.94 1.893 1.143 0 3.753 1.36 5.8 3.021 2.047 1.662 4.236 3.022 4.866 3.023.633.001.834 4.268.45 9.556-.44 6.066-.191 10.03.683 10.854.982.928.761 1.943-.77 3.54-1.522 1.587-2.148 4.418-2.148 9.71 0 6.462.433 7.826 3.203 10.1 2.773 2.276 3.202 3.634 3.202 10.142 0 6.656.433 7.951 3.789 11.342 4.059 4.103 11.582 16.413 11.582 18.953 0 .846.787 1.974 1.748 2.506.962.532 2.715 2.752 3.896 4.933 1.935 3.573 1.952 4.151.174 5.83-2.73 2.577-2.486 4.5 1.228 9.666 3.642 5.067 3.891 7.586 1.413 14.308-1.872 5.075-4.992 7.948-8.633 7.948-1.994 0-10.075 7.116-14.353 12.638-1.429 1.845-2.009 1.695-6.506-1.679-3.823-2.868-6.213-3.704-10.586-3.704-4.932 0-5.924.458-7.83 3.62-1.871 3.105-2.91 3.608-7.305 3.536-2.818-.047-7.142-.818-9.607-1.715z"
                ></Path>
              </G>

              <G onPress={() => onPress("id7")}>
                <Path
                  fill={this.state.color[7].id7}
                  fillOpacity="1"
                  d="M270.104 315.35c-1.03-1.557-3.007-2.519-5.177-2.519-2.648 0-3.702-.72-4.29-2.934-1.362-5.12-5.248-7.344-12.829-7.344-5.687 0-7.235-.473-8.904-2.72-1.705-2.298-3.193-2.722-9.557-2.722-4.146 0-7.912.571-8.368 1.27-.504.768-2.025.053-3.858-1.814-1.943-1.98-4.397-3.083-6.855-3.083-2.105 0-4.184-.544-4.62-1.21-.435-.664-2.199-1.209-3.918-1.209-1.72 0-3.127-.46-3.127-1.024 0-.563-1.153-2.279-2.562-3.813-3.088-3.36-3.333-8.773-.497-10.995 1.135-.89 3.94-1.465 6.233-1.278 5.098.414 5.695-1.098 5.903-14.934.218-14.535.757-15.648 7.784-16.082 8.153-.503 12.507-4.724 10.375-10.056-2.054-5.137-.197-9.252 4.401-9.75 2.972-.321 3.656-1.036 3.978-4.153.27-2.615 1.346-4.178 3.522-5.114 1.974-.848 3.142-2.365 3.154-4.094.027-3.807 1.693-5.926 5.95-7.569 3.235-1.249 4.205-1.016 8.761 2.1 4.667 3.192 5.81 3.447 12.81 2.861 4.227-.353 9.632-.801 12.01-.995 4.617-.377 5.851.76 7.146 6.578.452 2.03 2.209 4.022 4.56 5.17 3.435 1.677 3.824 2.455 3.824 7.64 0 3.175.692 6.426 1.537 7.224.894.844 5.176 1.451 10.224 1.451 8.436 0 8.708.096 9.45 3.326.42 1.829 1.39 4.544 2.156 6.034 2.072 4.035-1.975 7.947-7.117 6.881-6.07-1.258-8.447 5.48-3.44 9.757 1.409 1.204 2.562 3.356 2.562 4.783 0 1.426.634 3.193 1.41 3.925 1.026.968.677 1.55-1.281 2.137-1.48.443-2.704 1.45-2.72 2.236-.015.786-1.155 2.79-2.533 4.453-1.378 1.663-2.518 3.939-2.533 5.058-.016 1.119-1.182 2.38-2.59 2.802-1.41.422-2.563 1.82-2.563 3.104 0 1.992-.927 2.337-6.267 2.337-4.534 0-6.483.53-7.046 1.913-1.354 3.333-.844 6.604 1.144 7.324 2.457.89 2.52 5.274.076 5.274-1.015 0-2.202-.544-2.638-1.21-1.721-2.629-4.447-.988-5.71 3.438-.729 2.556-2.445 5.866-3.814 7.356l-2.49 2.71-1.666-2.52z"
                ></Path>
              </G>

              <G onPress={() => onPress("id8")}>
                <Path
                  fill={this.state.color[8].id8}
                  fillOpacity="1"
                  d="M356.163 300.14c-.874-.994-3.78-2.428-6.457-3.185-2.862-.81-5.124-2.303-5.49-3.627-.828-2.986-4.476-4.192-7.424-2.453-3.695 2.177-7.395 1.664-10.477-1.455-1.552-1.57-4.117-3.24-5.7-3.709-1.584-.469-3.233-2.182-3.665-3.806-.46-1.73-2.018-3.245-3.76-3.658-3.43-.812-2.947-3.623.815-4.75 2.606-.781 3.43-5.898 1.163-7.22-.705-.412-1.281-1.992-1.281-3.512s-1.14-3.738-2.532-4.927c-3.27-2.794-2.221-4.258 3.05-4.258 2.45 0 5.094-.924 6.328-2.212 2.244-2.34 2.901-9.282.985-10.4-.625-.365-1.516-2.573-1.98-4.909l-.844-4.245h-8.652c-5.022 0-9.297-.609-10.19-1.451-.845-.798-1.537-4.033-1.537-7.19 0-5.055-.415-5.926-3.493-7.318-2.026-.917-3.971-3.103-4.633-5.205-2.166-6.888-2.67-7.267-9.317-7.024-3.44.126-8.704.59-11.697 1.034-4.735.7-6.276.3-11.849-3.076-6.885-4.17-7.904-6.414-3.844-8.465 2.715-1.372 3.438-5.945 1.264-7.997-1.737-1.64.972-9.02 4.08-11.117 2.504-1.69 3.229-8.038 1.06-9.303-.704-.41-1.28-2.075-1.28-3.699 0-2.11.705-2.951 2.473-2.951 1.573 0 2.621-.972 2.882-2.671.258-1.684 1.593-2.938 3.611-3.392 2.88-.647 3.203-1.32 3.203-6.69 0-5.932.035-5.982 5.41-7.746 4.399-1.443 6.214-1.502 9.699-.312 2.358.805 6.84 1.45 9.96 1.432 5.354-.03 5.806-.302 8.02-4.837 2.248-4.601 2.603-4.805 8.343-4.805 4.99 0 6.208-.457 7.26-2.721.854-1.837 2.573-2.84 5.294-3.09 2.216-.204 5.043-1.428 6.283-2.721 1.555-1.622 3.932-2.351 7.663-2.351 3.085 0 6.051-.73 6.904-1.701.823-.936 4.28-1.888 7.685-2.116l6.19-.416.653 10.856c.522 8.649 1.112 11.108 2.903 12.093 4.525 2.487 9.568 7.867 9.568 10.207 0 6.114 7.711 13.4 14.182 13.4 1.748 0 3.844 1.07 4.736 2.418 1.103 1.668 2.987 2.418 6.072 2.418 3.813 0 4.472.41 4.472 2.781 0 1.53.675 3.418 1.5 4.196 1.143 1.08 1.11 2.526-.145 6.115-2.277 6.51-1.075 8.913 6.988 13.967 5.868 3.678 8.098 4.38 13.898 4.38 4.577 0 7.446.612 8.502 1.814.877.998 2.821 1.879 4.32 1.957 2.038.107 1.803.336-.931.907-2.616.547-4.506 2.265-6.639 6.035-3.282 5.8-7.615 9.418-8.91 7.439-.44-.672-2.838-1.222-5.328-1.222-3.45 0-4.687.575-5.198 2.418-.474 1.713-1.747 2.418-4.363 2.418-2.032 0-3.694.545-3.694 1.21 0 .67-3.39 1.209-7.61 1.209-4.185 0-7.92.474-8.3 1.053-.378.58-2.43 1.382-4.558 1.784-4.111.776-5.209 3.88-2.333 6.595 1.196 1.128 1.196 1.773 0 2.902-.845.798-1.537 4.214-1.537 7.59 0 7.246-2.639 11.515-7.118 11.515-4.662 0-4.445 6.78.333 10.376 2.742 2.064 3.5 3.71 3.64 7.905.099 2.915.336 5.843.528 6.508.553 1.91-.029 16.703-.748 19.046-.49 1.593-2.015 2.116-6.171 2.116-3.345 0-6.15.715-7.116 1.813-2.007 2.283-3.116 2.284-5.119.006z"
                ></Path>
              </G>

              <G onPress={() => onPress("id9")}>
                <Path
                  fill={this.state.color[9].id9}
                  fillOpacity="1"
                  d="M179.575 288.95c-.921-3.16-1.973-8.335-2.337-11.5-.655-5.692-.728-5.772-6.59-7.165-3.26-.775-5.22-1.631-4.358-1.903 2.649-.833 1.774-6.943-1.397-9.755-3.753-3.328-5.71-3.31-9.545.092-5.047 4.476-13.554 3.785-22.507-1.826-4.892-3.067-7.254-5.354-7.254-7.026 0-1.363-2.837-5.31-6.305-8.77-3.467-3.462-6.714-7.833-7.214-9.716-.865-3.254-1.176-3.384-6.352-2.651-4.99.706-5.507.528-6.215-2.132-.424-1.597-3.375-5.169-6.557-7.938-6.332-5.51-6.624-6.69-4.324-17.498 1.295-6.089 1.202-7.142-.817-9.248-1.888-1.969-1.996-2.7-.63-4.253 1.331-1.514 1.341-2.858.052-6.976-.879-2.805-2.092-6.006-2.696-7.113-.717-1.313-.498-2.484.631-3.368.952-.746 2.11-3.27 2.575-5.608.465-2.34 1.7-4.562 2.744-4.94 2.681-.972 5.646-6.861 5.646-11.218 0-3.297.41-3.688 3.868-3.688 4.953 0 13.81-5.254 15.364-9.114.66-1.638 1.934-2.978 2.832-2.979 2.606-.002 11.24-9.103 11.24-11.848 0-1.378-1.073-2.82-2.392-3.215-1.317-.395-3.423-1.792-4.682-3.105-2.219-2.314-2.195-2.388.791-2.392 5.366-.008 11.186-4.246 11.641-8.476.4-3.713.451-3.74 2.969-1.546 7.07 6.16 10.98 7.903 16.022 7.142 5.545-.837 8.138 1.109 4.669 3.504-3.34 2.304-2.714 8.63 1.085 10.98 4.023 2.488 4.089 5 .175 6.683-2.643 1.138-3.124 2.39-3.79 9.887-.823 9.275-.22 10.739 5.6 13.58 4.82 2.352 5.572 6.024 1.722 8.405-4.483 2.774-4.382 9.949.156 11.024 1.773.42 4.367.481 5.765.136 2.02-.499 2.541-.024 2.541 2.32 0 3.741 3.239 4.973 6.269 2.384 2.599-2.22 4.21-1.172 5.82 3.787.587 1.807 2.486 3.103 5.772 3.938 2.694.685 5.612 2.058 6.485 3.05 2.14 2.434 10.24 2.428 10.24-.008 0-2.576 2.254-2.246 4.14.604.977 1.478 2.987 2.419 5.166 2.419 2.518 0 3.89.8 4.669 2.72 2.137 5.275 5.935 7.35 11.825 6.462 3.509-.53 5.685-.332 6.276.571 1.214 1.855-1.442 8.614-4.132 10.514-1.187.839-2.34 3.013-2.562 4.831-.317 2.6-1.216 3.438-4.2 3.921-4.707.762-7.085 6.684-4.89 12.174 1.215 3.038 1.015 3.657-1.729 5.354-2.078 1.285-4.493 1.673-7.314 1.173-6.495-1.15-7.638 1.144-8.46 16.98-.39 7.537-1.087 14.057-1.547 14.49-.46.432-2.065.068-3.567-.81-2.463-1.44-3.087-1.21-6.378 2.335-2.005 2.161-4.291 3.93-5.08 3.93-1.94 0-1.806 1.892.274 3.855.938.886 2.102 3.101 2.586 4.924.485 1.822 1.446 3.313 2.138 3.313.69 0 1.256.544 1.256 1.21 0 .664-.618 1.208-1.372 1.208-.755 0-2.237.817-3.294 1.814-1.057.998-3.479 1.814-5.382 1.814-3.039 0-3.664-.7-5.135-5.744z"
                ></Path>
              </G>

              <G onPress={() => onPress("id10")}>
                <Path
                  fill={this.state.color[10].id10}
                  fillOpacity="1"
                  d="M51.858 266.768c-.477-.728-3.103-1.122-5.84-.875-3.095.278-4.974-.063-4.974-.905 0-.743-2.238-1.985-4.972-2.758-6.633-1.876-8.252-3.838-6.584-7.977 2.306-5.726 1.559-9.668-2.535-13.37-2.113-1.912-3.826-4.054-3.807-4.76.02-.708 1.789-3.463 3.932-6.123l3.895-4.837-.881-12.697c-.583-8.401-1.685-14.285-3.257-17.392-2.33-4.604-2.327-4.76.152-8.046 2.843-3.768 3.347-10.791.938-13.065-1.267-1.196-1.202-1.734.32-2.642 1.05-.627 2.878-1.148 4.06-1.159 2.807-.024 7.458-5.66 7.458-9.04 0-1.457 1.439-3.925 3.198-5.485 2.899-2.57 3.504-2.68 6.476-1.18 2.94 1.486 3.873 1.351 9.05-1.304 3.174-1.629 6.69-3.913 7.813-5.077 1.122-1.164 3.034-2.116 4.247-2.116 1.214 0 2.925-.817 3.802-1.814.877-.998 3.18-1.814 5.12-1.814s5.327-.34 7.529-.756c3.37-.636 4.003-1.306 4.003-4.232 0-2.234.665-3.477 1.861-3.477 1.474 0 1.726 1.323 1.212 6.349-1.22 11.953-1.879 14.097-5.048 16.45-1.738 1.29-3.515 4.023-3.95 6.071-.433 2.049-1.584 4.348-2.556 5.11-2.16 1.692-2.306 6.141-.263 8.07.87.821 1.45 4.709 1.378 9.238-.081 5.034.462 8.28 1.524 9.113 1.198.938 1.362 2.698.6 6.42-.578 2.82-1.076 7.43-1.107 10.242-.05 4.544.589 5.675 5.73 10.149 3.182 2.769 6.14 6.366 6.573 7.994.706 2.658 1.35 2.917 6.316 2.544 6.68-.502 7.735 1.429 4.73 8.652-2.115 5.08-4.19 5.385-4.19.614 0-1.584-.598-3.229-1.328-3.655-2.515-1.467-11.897.914-14.948 3.794-1.68 1.586-3.532 2.884-4.114 2.884-.583 0-1.437 2.231-1.9 4.959-.588 3.476-1.578 5.141-3.31 5.569-1.383.341-3.105 2.42-3.907 4.715-1.725 4.933-5.297 5.454-7.408 1.081-.803-1.662-2.22-3.023-3.152-3.023-2.333 0-4.767 2.497-4.767 4.892 0 1.873-3.759 5.991-5.47 5.991-.43 0-1.173-.595-1.65-1.322z"
                ></Path>
              </G>

              <G onPress={() => onPress("id11")}>
                <Path
                  fill={this.state.color[11].id11}
                  fillOpacity="1"
                  d="M240.872 199.011c0-.915-2.202-1.163-6.7-.755-7.098.644-8.652-.192-11.245-6.044-.869-1.961-2.275-2.72-5.035-2.72-2.518 0-4.299-.829-5.2-2.42-1.708-3.01-10.248-3.515-10.248-.604 0 2.518-3.01 2.269-5.631-.466-1.202-1.253-3.76-2.576-5.684-2.94-2.403-.453-4.18-2.01-5.678-4.975-2.294-4.54-6.54-5.8-9.651-2.864-1.196 1.128-1.537.69-1.537-1.972 0-3.18-.297-3.38-4.163-2.822-7.904 1.14-9.938-1.943-3.982-6.038 4.917-3.381 3.524-9.674-3.035-13.707-4.604-2.83-4.723-3.09-4.356-9.466.302-5.245.997-7.016 3.473-8.855 4.203-3.12 4.152-8.447-.106-11.081-3.594-2.223-4.175-4.942-1.281-5.99 1.057-.383 1.921-1.427 1.921-2.32 0-2.079 4.742-11.388 6.248-12.267.63-.366 2.966-.067 5.192.666 3.383 1.113 4.46.98 6.552-.807 1.377-1.176 2.504-2.812 2.504-3.636 0-1.687 2.822-2.965 6.55-2.965 1.373 0 2.828-.816 3.234-1.813 1.08-2.658 8.464-2.343 10.304.439 1.12 1.693 3.745 2.462 10.564 3.097 7.743.72 9.59 1.359 12.588 4.354 2.873 2.87 5.033 3.684 11.84 4.461l8.327.95.4 4.567c.428 4.902 3.427 7.341 16.256 13.225 5.04 2.311 5.76 3.125 5.76 6.504 0 2.546.764 4.153 2.242 4.717 2.014.768 1.96.957-.52 1.862-3.351 1.222-5.227 7.708-2.972 10.273 1.56 1.775 1.36 1.928-4.834 3.67-.88.249-1.601 1.557-1.601 2.908 0 1.593-.842 2.456-2.395 2.456-3.495 0-4.75 8.107-1.741 11.245 2.08 2.17 2.045 2.4-.68 4.482-1.578 1.207-2.87 2.788-2.87 3.512 0 .725-.577 1.318-1.281 1.318-1.755 0-1.626 10.074.151 11.751 1.055.996.718 1.772-1.281 2.951-1.492.88-2.713 2.81-2.713 4.29 0 1.478-1.115 3.252-2.478 3.94-3.228 1.632-5.208 1.59-5.208-.11z"
                ></Path>
              </G>

              <G onPress={() => onPress("id12")}>
                <Path
                  fill={this.state.color[12].id12}
                  fillOpacity="1"
                  d="M435.577 196.142c-1.057-1.202-3.925-1.814-8.503-1.814-5.79 0-8.03-.704-13.843-4.347-3.814-2.39-7.262-5.15-7.661-6.133-.835-2.053 1.314-6.449 3.152-6.449 1.988 0 1.377-2.784-1.326-6.046-1.378-1.663-2.518-4.247-2.533-5.744-.029-2.749-.643-3.057-6.433-3.23-2.312-.068-3.098-.684-2.826-2.211.302-1.701-.562-2.116-4.405-2.116-8.036 0-15.827-6.596-15.827-13.4 0-2.339-5.043-7.72-9.568-10.207-1.795-.987-2.383-3.458-2.914-12.261l-.666-11.025 5.286-.843c2.908-.464 5.571-1.277 5.918-1.808.348-.53 3.305-1.343 6.573-1.805 6.09-.862 7.473-1.85 15.838-11.323 2.45-2.774 5.08-5.044 5.845-5.044 2.428 0 8.658-7.054 10.4-11.774 2.369-6.423 2.14-8.244-1.31-10.377-2.223-1.375-3.201-3.344-3.689-7.429-.452-3.786-1.617-6.339-3.656-8.008l-2.992-2.45 5.89-5.072c3.24-2.79 6.229-6.025 6.642-7.189 1.07-3.012 5.01-2.617 9.037.907 1.9 1.663 4.026 3.023 4.724 3.023.698 0 2.506 1.088 4.018 2.419 1.513 1.33 3.705 2.418 4.872 2.418 4.96 0 10.424 11.251 9.302 19.15-.448 3.15-.21 5.034.635 5.034 2.265 0 4.25 7.818 3.344 13.17-.63 3.715-.334 5.576 1.13 7.115 1.09 1.147 2.398 4.203 2.907 6.79.509 2.587 2.28 6.94 3.936 9.673 1.656 2.734 3.017 6.08 3.026 7.435.008 1.356 1.187 4.62 2.618 7.256 3.082 5.67 7.095 20.082 8.354 30 1.148 9.034-.955 15.541-5.641 17.456-6.514 2.662-12.014 6.164-14.049 8.946-1.127 1.541-2.794 3.521-3.704 4.4-.91.88-1.653 2.648-1.653 3.93 0 1.283-.47 2.332-1.044 2.332-.574 0-2.006 1.905-3.182 4.233-2.347 4.647-3.615 5.156-6.022 2.418z"
                ></Path>
              </G>

              <G onPress={() => onPress("id13")}>
                <Path
                  fill={this.state.color[13].id13}
                  fillOpacity="1"
                  d="M24.391 169.425c0-.662-4.016-4.988-8.924-9.613-4.909-4.626-8.944-9.17-8.967-10.1-.023-.928 2.552-4.306 5.722-7.505 3.17-3.2 5.765-6.42 5.765-7.155 0-.735 1.534-4.294 3.408-7.908 3.023-5.827 3.248-7.085 1.984-11.11-.783-2.495-1.788-6.986-2.232-9.979-.445-2.992-1.222-8.162-1.728-11.487-.506-3.325-1.607-7.226-2.446-8.67-.945-1.622-1.22-4.734-.723-8.161.757-5.216 1.037-5.543 4.793-5.593 2.194-.029 6.295-.884 9.113-1.9 2.818-1.017 7.717-2.633 10.888-3.593 3.17-.96 7.205-2.73 8.966-3.936 3.629-2.483 10.47-4.418 24.17-6.837 5.863-1.036 10.505-2.612 12.252-4.161 1.993-1.768 4.516-2.495 8.658-2.495 10.543 0 19.616-5.565 25.238-15.48 1.555-2.744 7.643-6.285 10.804-6.285 2.473 0 4.419 5.222 5.03 13.505.46 6.231.235 6.972-2.473 8.136-3.696 1.59-3.976 6.438-.558 9.665 1.903 1.797 2.281 3.45 1.77 7.74-.559 4.67-.262 5.653 2.062 6.827 3.05 1.54 3.815 7.332.968 7.332-1.232 0-1.95 2.39-2.437 8.123-.38 4.467-1.323 8.322-2.096 8.565-.774.243-1.407 1.99-1.407 3.882 0 4.439-5.25 8.451-11.06 8.451-6.146 0-5.805 3.8.742 8.277l5.053 3.455-4.787 4.413c-2.633 2.426-5.497 4.412-6.365 4.412-.869 0-2.118 1.338-2.777 2.973-1.453 3.608-10.482 9.49-13.675 8.91-1.865-.34-2.23-1.397-1.913-5.547l.393-5.127H93.02c-4.192 0-4.58.295-4.58 3.476 0 2.927-.634 3.597-4.004 4.233-2.202.415-5.59.756-7.529.756s-4.243.816-5.12 1.813c-.877.998-2.645 1.814-3.927 1.814-1.283 0-3.096.952-4.028 2.116-3.15 3.932-9.317 6.122-15.41 5.474-5.23-.557-5.95-.299-8.469 3.04-1.513 2.007-2.752 4.444-2.752 5.416 0 2.697-5.03 8.138-7.523 8.138-1.217 0-2.904.653-3.75 1.452-.845.798-1.537.91-1.537.248z"
                ></Path>
              </G>

              <G onPress={() => onPress("id14")}>
                <Path
                  fill={this.state.color[14].id14}
                  fillOpacity="1"
                  d="M288.312 134.943c-1.737-.655-5.196-1.029-7.686-.83-5.464.434-9.008-2.395-9.017-7.199-.005-2.953-1.223-3.912-10.888-8.572-10.875-5.243-10.882-5.25-10.882-10.014 0-4.696-.243-4.961-5.985-6.547-2.674-.738-.283-5.16 3.614-6.683 2.572-1.006 4.025-2.592 4.521-4.936.468-2.207 1.535-3.454 2.955-3.454 3.136 0 11.547-7.816 11.547-10.73 0-2.816-1.479-3.877-6.85-4.914-2.85-.55-4.127-1.647-4.838-4.154-.53-1.874-1.856-4.035-2.944-4.804-2.046-1.442-1.5-6.838.691-6.838.623 0 1.132-2.176 1.132-4.836 0-4.332.329-4.837 3.15-4.837 4.786 0 12.154-3.9 12.19-6.452.028-1.98.897-2.153 8.037-1.606 4.404.337 11.465 1.144 15.692 1.795 24.96 3.841 31.346 4.383 50.598 4.293 11.624-.054 26.611-.723 33.304-1.488 6.693-.764 16.493-1.69 21.777-2.056l9.607-.666-4.804 3.997c-5.653 4.703-6.094 8.11-1.601 12.351 2.354 2.223 3.202 4.311 3.202 7.887 0 3.784.675 5.281 3.038 6.743 2.803 1.734 2.92 2.203 1.514 6.065-1.744 4.787-5.95 9.374-11.64 12.693-2.161 1.261-5.798 4.75-8.082 7.752-3.198 4.204-5.393 5.763-9.543 6.78-2.964.727-9.424 2.712-14.356 4.412-4.931 1.7-11.679 3.347-14.993 3.661-3.315.315-6.7 1.337-7.523 2.272-.853.97-3.819 1.701-6.904 1.701-3.782 0-6.106.728-7.727 2.419-1.276 1.33-3.42 2.418-4.766 2.418-3.551 0-7.403 2.225-7.403 4.275 0 1.284-1.532 1.771-5.566 1.771-5.888 0-8.757 1.922-10.381 6.953-.68 2.103-1.804 2.703-4.955 2.644-2.242-.042-5.498-.612-7.235-1.266z"
                ></Path>
              </G>

              <G onPress={() => onPress("id15")}>
                <Path
                  fill={this.state.color[15].id15}
                  fillOpacity="1"
                  d="M146.722 104.532c-8.519-5.908-9.17-7.004-8.609-14.499.37-4.938 1.043-6.953 2.323-6.953s1.803-1.563 1.803-5.399c0-4.14-.59-5.697-2.533-6.678-2.14-1.081-2.414-2.103-1.764-6.578.644-4.44.328-5.654-1.95-7.496-3.516-2.841-3.427-3.826.495-5.514 3.153-1.356 3.2-1.57 2.412-11.159-.44-5.377-1.574-10.945-2.517-12.373-1.584-2.397-1.4-2.71 2.391-4.09 9.708-3.534 13.65-5.494 13.68-6.8.019-.768 2.772-1.69 6.118-2.052 12.134-1.31 3.24-1.632 7.964-4.583 4.706-2.94 23.48-4.479 39.208-3.622 14.986.816 26.918 15.213 26.2 17.346-.365 1.089.064 5.749-3.32 3.736-3.385-2.012-14.685-15.61-16.796-14.153-3.837 2.648 6.57 11.627 6.57 14.148 0 3.635.367 10.795 3.668 13.62 3.93 3.363 7.161 1.053 15.953.678 12.885-.548 16.05 2.707 11.188 11.508-2.636 4.772-2.415 9.246.544 10.99 1.36.802 2.656 2.952 2.882 4.778.344 2.788 1.219 3.478 5.457 4.303 2.777.541 5.315 1.236 5.64 1.543 1.22 1.151-8.233 9.031-10.848 9.044-1.964.009-2.925.974-3.454 3.467-.501 2.367-1.952 3.93-4.612 4.971-2.9 1.134-4.085 2.55-4.692 5.605-.733 3.685-1.145 4.014-4.195 3.337-1.86-.412-4.903-2.084-6.761-3.714-3.492-3.063-10.331-5.11-17.238-5.16-2.307-.017-4.934-1.04-6.283-2.447-2.918-3.044-14.023-3.486-15.194-.605-.405.998-2.052 1.822-3.66 1.832-3.46.022-4.98.949-6.92 4.214-1.13 1.903-2.768 2.419-7.685 2.419-5.708 0-6.415.321-8.147 3.706-1.498 2.93-2.707 3.704-5.764 3.694-2.127-.008-4.733.35-5.79.793-1.105.465-3.552-.324-5.764-1.857z"
                ></Path>
              </G>
            </Svg>
          </TouchableOpacity>

          <View style={styles.data}>
            <View style={styles.viget3}>
              <Text style={styles.bigText}>{this.state.newstate[7].nazwa}</Text>
            </View>

            <WigetHomeBlue
              data={"   " + this.state.newstate[3].Liczba}
              title="Ilość chorych łącznie"
            />
            <WigetHomeRed
              data={"   " + this.state.newstate[2].Liczbazgonów}
              title="Ilość zgonów łącznie"
            />

            <WigetHomeBlue
              data={"   " + this.state.newstate[0].Bilanszachorowań}
              title="Liczba zachorowań dzisiaj"
            />
            <WigetHomeRed
              data={"   " + this.state.newstate[1].Bilanszgonów}
              title="Liczba zgonów dzisiaj"
            />

            <WigetHomeBlue
              data={"   " + this.state.newstate[4].Przewidywanezachorowania}
              title="Przewidywana liczba zachorowań"
            />
            <WigetHomeRed
              data={"   " + this.state.newstate[5].Przewidywanezgony}
              title="Przewidywana liczba zgonów"
            />
            {}

            <View style={{ justifyContent: "flex-end", height: "7%" }}>
              <Text>Źródło danych: www.gov.pl</Text>
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
    backgroundColor: colors.bgColor,
    fontFamily: "Arial",
  },

  map: {
    paddingTop: "2%",
  },

  data: {
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: colors.bgColor,
    height:
      (Dimensions.get("screen").height - Dimensions.get("screen").width) * 1.3,
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    flexWrap: "wrap",
  },

  viget3: {
    width: "95%",
    height: "11%",
    backgroundColor: "#FFFEFE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  viget4: {
    width: "95%",
    height: "5%",
    backgroundColor: "#FFFEFE",
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },

  polska: {
    position: "absolute",
    width: RFValue(30),
    height: RFValue(30),
    margin: "5%",
    bottom: RFValue(10),
    justifyContent: "center",
    alignItems: "center",
  },

  bigText: {
    fontSize: RFValue(25),
    textTransform: "capitalize",
    color: "#5A5A5A",
  },

  underline: {
    height: 2,
    width: "90%",
    marginLeft: 10,
    marginTop: 10,
  },
});

export default HomeScreen;