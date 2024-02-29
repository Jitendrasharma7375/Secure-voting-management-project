import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Perform sign-out logic (clear authentication state, etc.)
    // For example, you can clear user session or token here

    // After sign-out, redirect to the sign-in page
    navigate('/signin');
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
