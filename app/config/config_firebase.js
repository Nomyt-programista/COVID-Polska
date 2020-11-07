import * as firebase from "firebase";

var data_ = "";

const firebaseConfig = {
  apiKey: "AIzaSyDPTX9SmhMpvR_J7S22flau3iNvgm744N8",
  authDomain: "coronaapka.firebaseapp.com",
  databaseURL: "https://coronaapka.firebaseio.com",
  projectId: "coronaapka",
  storageBucket: "coronaapka.appspot.com",
  messagingSenderId: "596270076330",
  appId: "1:596270076330:web:1fcb70b229d8894e96dbd3",
  measurementId: "G-66CD9YHC7S",
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// firebase
//   .database()
//   .ref("dataDzis/")
//   .on("value", function (snapshot) {
//     data_ = await snapshot.val();
//   });

export default firebaseConfig;
