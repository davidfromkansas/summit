//contains credentials for firebase
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyANjCIMgQYeT-nkZ-pSKI679238N9_roeo",
  authDomain: "summit-33d67.firebaseapp.com",
  databaseURL: "https://summit-33d67.firebaseio.com",
  projectId: "summit-33d67",
  storageBucket: "summit-33d67.appspot.com",
  messagingSenderId: "394785989678",
  appId: "1:394785989678:web:1fb8cc9572137cb8e52bbf"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
