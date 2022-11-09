import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBnOfZ_jnOxIfJA-oFuIwM0ccvQ7Vczr0k",
  authDomain: "firegram-c539f.firebaseapp.com",
  projectId: "firegram-c539f",
  storageBucket: "firegram-c539f.appspot.com",
  messagingSenderId: "163609151324",
  appId: "1:163609151324:web:a9a288908f89e29edda399",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
