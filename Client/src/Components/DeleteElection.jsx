import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DeleteElection() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {

    toast.success('Election deleted successfully!');
    navigate('/');
  };

  return (
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
  );
}

export default DeleteElection;
