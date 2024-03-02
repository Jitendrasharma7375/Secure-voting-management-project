import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials = true;

function Signin() {
  const [Voter_ID, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('voter'); // Default role is 'voter'
  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await axios.post("http://localhost:3000/auth/signin", { Voter_ID, password, role }); // Include role in the request body
      console.log(result);

      if (result.data.message === "Login Success") {
        toast.success("Login Success");
        setTimeout(() => {
          navigateTo("/home");
        }, 1000);
      } else if (result.data.message === "User not found" || result.data.message === "Wrong Password") {
        toast.error(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="w-full flex justify-center items-center bg-gray-100 py-5 min-h-[100vh] h-auto ">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="p-2">Email address</label>
            <input type="name" className="form-control p-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={(e) => setEmail(e.target.value)} />
            <small id="emailHelp" className="fo
            }rm-text text-muted p-2">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="p-2">Password</label>
            <input type="password" className="form-control p-2" id="exampleInputPassword1" placeholder="Password" name='password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="role" className="p-2">Role</label>
            <select id="role" className="form-control p-2" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="voter">Voter</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary p-2 mt-2" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Signin;
