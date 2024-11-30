import React, { useEffect } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // For redirection

const SignIn = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is already signed in
    if (auth.currentUser) {
      navigate("/prompt");
    }
  }, [auth, navigate]);

  const handleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user); // You can store user data in your state or context
      navigate("/prompt");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Sign in with Google</h2>
      <button onClick={handleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
