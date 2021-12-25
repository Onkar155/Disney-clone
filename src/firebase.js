import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi7DJ7W-BC8KsSh40MdJQFvmqav719ams",
  authDomain: "fir-disney-clone.firebaseapp.com",
  projectId: "fir-disney-clone",
  storageBucket: "fir-disney-clone.appspot.com",
  messagingSenderId: "835040202576",
  appId: "1:835040202576:web:b43cf672490db8a28ae655",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
