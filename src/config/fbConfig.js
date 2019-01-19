 import firebase from 'firebase/app'
 import 'firebase/firestore'
 import 'firebase/auth'

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBiw9xl9qB_SHwC1RKWuuGR_6vre4BvQII",
    authDomain: "mcplanner-13c6f.firebaseapp.com",
    databaseURL: "https://mcplanner-13c6f.firebaseio.com",
    projectId: "mcplanner-13c6f",
    storageBucket: "mcplanner-13c6f.appspot.com",
    messagingSenderId: "571987919894"
  };

  firebase.initializeApp(config);


  export default firebase;