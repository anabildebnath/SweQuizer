import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs,where, query, onSnapshot } from "firebase/firestore";

const app = initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
});

// Get the auth object
const auth = getAuth(app);
// Create a GoogleAuthProvider instance
const googleProvider = new GoogleAuthProvider();


const db = getFirestore();
const colRef = collection(db, "user");

const q = query(colRef, where("Email", "==", "shawon@gmail.com"));
onSnapshot(q, (snapshot) => {
  let user = [];
  snapshot.docs.forEach((doc) => {
    user.push({ ...doc.data(), id: doc.id });
  });
  console.log("just shawon:", user);
});






//get collection data
getDocs(colRef)
  .then((snapshot) => {
    let users = [];
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    console.log(users);
  })
  .catch((err) => {
    console.log(err.message);
  });

export { auth, googleProvider, db };
export default app;
