// firebaseUtils.js
import { doc, getDoc, getFirestore } from "firebase/firestore";

// Initialize Firestore
const db = getFirestore();

// Firestore fetch function
export async function fetchUserData(uid) {
  const docRef = doc(db, "user", uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return null;
  }
}
