import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

function Signin() {
  const [Voter_ID, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const result = await axios.post("http://localhost:3000/auth/signin", { Voter_ID, password });
      console.log(result);

      if (result.data.message === "Login Success") {
        navigateTo("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 py-5 min-h-[100vh] h-auto ">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="p-2">Email address</label>
          <input type="name" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
          <small id="emailHelp" className="form-text text-muted p-2">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1" className="p-2">Password</label>
          <input type="password" className="form-control p-2" id="exampleInputPassword1" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-inputp-2" id="exampleCheck1" />
          <label className="form-check-label p-2" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary p-2" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Signin;