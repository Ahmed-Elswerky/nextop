import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCHhMsOlQ_n3ONHkyudL63VpiMtWvds2X0",
    authDomain: "nex-po.firebaseapp.com",
    projectId: "nex-po",
    storageBucket: "nex-po.appspot.com",
    messagingSenderId: "271652050599",
    appId: "1:271652050599:web:38ac240fd5c313b03a6d82",
    measurementId: "G-JB32XYDD4K"
  };
  // Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;