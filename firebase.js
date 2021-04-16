import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLdP0jGMURbAfB9cOBKBsXd5p9XwLHs9o",
  authDomain: "whatsapp--2-0.firebaseapp.com",
  projectId: "whatsapp--2-0",
  storageBucket: "whatsapp--2-0.appspot.com",
  messagingSenderId: "483942170622",
  appId: "1:483942170622:web:67c21de69830cd97d88aaf",
  measurementId: "G-F8KL09HWYE",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
