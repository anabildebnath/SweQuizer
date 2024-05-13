import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // signup function
  async function signup(email, password, username, reg, batch, semester) {
    const auth = getAuth();
    // await createUserWithEmailAndPassword(auth, email, password);
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
      displayReg: reg,
      displayBatch: batch,
      displaySemester: semester,
    });

    setCurrentUser(user);
  }

  // login function
  async function login(email, password) {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        throw new Error(
          "Account doesn't exist. Please sign up to create an account."
        );
      } else if (error.code === "auth/invalid-email") {
        throw new Error(
          "Invalid email format. Please enter a valid email address."
        );
      } else if (error.code === "auth/too-many-requests") {
        throw new Error(
          "Too many wrong attempts,access is temporarily locked."
        );
      } else if (error.code === "auth/invalid-email") {
        throw new Error(
          "Invalid email format. Please enter a valid email address."
        );
      } else if (error.code === "auth/invalid-password") {
        throw new Error(
          "Incorrect password. Please check your password and try again."
        );
      } else {
        // throw new Error("Failed to login. Please try again later.");
        throw error;
      }
    }
  }

  // logout function
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
