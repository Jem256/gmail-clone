import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQ3UAVDb6P0x_qqYGKx6aURxA4hBbJ7FE",
  authDomain: "clone-73898.firebaseapp.com",
  projectId: "clone-73898",
  storageBucket: "clone-73898.appspot.com",
  messagingSenderId: "826481577909",
  appId: "1:826481577909:web:c1ac84798c805526bc13fc",
  measurementId: "G-JNB201GTP2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }