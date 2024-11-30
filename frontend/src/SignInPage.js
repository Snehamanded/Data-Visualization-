// src/SignInPage.js
import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

const SignInPage = () => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in:", user);
      // Redirect to the home page or main app page after successful login
      window.location.href = "/home"; // Update with your routing logic
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <div className="sign-in-container">
      <h2>Sign In with Google</h2>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignInPage;
