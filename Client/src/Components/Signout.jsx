import React from 'react';
import { useNavigate } from 'react-router-dom';
import cookie from "react-cookies";
const SignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    cookie.remove('token');
    navigate('/signin');
  };

  return (
    <button onClick={handleSignOut}>Sign Out</button>
  );
};

export default SignOut;
