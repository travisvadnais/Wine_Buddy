import firebase from 'firebase/app';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC3VZak7xU8ecmYNcwrluAfEPuU-XhfrZE",
    authDomain: "wine-buddy-e8cd3.firebaseapp.com",
    databaseURL: "https://wine-buddy-e8cd3.firebaseio.com",
    projectId: "wine-buddy-e8cd3",
    storageBucket: "wine-buddy-e8cd3.appspot.com",
    messagingSenderId: "952462308851"
  };
  firebase.initializeApp(config);

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

const auth = firebase.auth();

export {
  auth,
};