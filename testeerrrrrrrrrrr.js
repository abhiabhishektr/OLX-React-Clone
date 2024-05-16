import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider } from "../firebase/setup";

const YourComponent = () => {

  useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        console.log("User is signed in:", user);
      } else {
        // User is signed out
        console.log("User is signed out");
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []); // Only run once on component mount

  const googleSignin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch(err) {
      console.error(err);
    }
  };

  return (
    // Your component JSX
  );
};

export default YourComponent;
