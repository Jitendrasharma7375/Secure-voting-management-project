import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you use React Router for navigation
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateElection() {
  const { id } = useParams(); // Assuming you have a parameter for the election ID
  const [electionId, setElectionId] = useState(id); // Initialize electionId with the parameter value
  const [electionName, setElectionName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Fetch the election details based on the ID and populate the state variables

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the election details using an API call or any other method
    // Display a success message using toast
    toast.success('Election updated successfully!');
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">Update Election</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="electionId" className="font-semibold mb-1">Election ID</label>
            <input
              type="text"
              id="electionId"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={electionId}
              onChange={(e) => setElectionId(e.target.value)}
              readOnly // Prevent users from editing the election ID
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="electionName" className="font-semibold mb-1">Election Name</label>
            <input
              type="text"
              id="electionName"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={electionName}
              onChange={(e) => setElectionName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startDate" className="font-semibold mb-1">Start Date</label>
            <input
              type="date"
              id="startDate"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="endDate" className="font-semibold mb-1">End Date</label>
            <input
              type="date"
              id="endDate"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Update Election</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default UpdateElection;
