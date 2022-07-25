import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
// import firebase from "firebase";
// // import * as firebase from "firebase/app";
// import { FirebaseApp, initializeApp } from "firebase/app";
// import { firebase } from '@firebase/app';
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// // import firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
// import '@firebase/auth'
// import '@firebase/firestore'

// const db = firebase.firestore()
// const auth = firebase.auth()

// export { db, auth }

const firebaseConfig = {
  apiKey: "AIzaSyA8lgfOAbb_WgSZUQnjVitzyAhQuQQ9AE4",
  authDomain: "clone-wars-blue-bird.firebaseapp.com",
  projectId: "clone-wars-blue-bird",
  storageBucket: "clone-wars-blue-bird.appspot.com",
  messagingSenderId: "1096945910772",
  appId: "1:1096945910772:web:7dc1e13e652fb34494afa1",
  measurementId: "G-CBSNK379EE"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = getAuth(firebase);

// const firebaseApp = firebase.initialzeApp(firebaseConfig);

// const db = getDatabase(app);

// const auth = getAuth(app);

// const FirebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();

// firebase.initializeApp(firebaseConfig);

// export const auth = firebase.auth();

// export const db = firebase.firestore();

export default db;
