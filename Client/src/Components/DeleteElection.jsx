import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbar from './Navbar';

function DeleteElection() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Send a DELETE request to the server to delete the election with the specified ID
      const response = await axios.delete(`http://localhost:3000/ManageElection/deleteElection/${id}`, { data: { id } });
  
      if (response.data.deleted) {
        // Display a success toast message
        toast.success('Election deleted successfully!');
        // Navigate the user back to the home page
        navigate('/');
      } else {
        // Display an error toast message
        toast.error('Error deleting election.');
      }
    } catch (error) {
      console.error('Error deleting election:', error);
      // Display an error toast message
      toast.error('Error deleting election.');
    }
  };

  return (
    <>
    <Navbar />
     <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Delete Election</h2>
        <p>Are you sure you want to delete this election?</p>
        <div className="flex justify-end mt-4">
          <button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 mr-2">Delete</button>
          <button onClick={() => navigate('/')} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
        </div>
      </div>
      <ToastContainer />
    </div>
    </>
  );
}

export default DeleteElection;
