import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateElection = ({id}) => {
  console.log(id);
  const navigate = useNavigate();
  const [election, setElection] = useState(null);
  const [updatedElection, setUpdatedElection] = useState(null);

  useEffect(() => {
    const fetchElection = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/ManageElection/${id}`);
        setElection(response.data);
      } catch (error) {
        console.error('Error fetching election data:', error);
        toast.error('An error occurred while fetching election data.');
      }
    };

    fetchElection();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      electionId: updatedElection?.electionId || election?.electionId,
      electionName: updatedElection?.electionName || election?.electionName,
      startDate: updatedElection?.startDate || election?.startDate,
      endDate: updatedElection?.endDate || election?.endDate,
    };

    toast.success('Election updated successfully!');

    axios
      .all([
        axios.get(`http://localhost:3000/ManageElection/${id}`),
        axios.patch(`http://localhost:3000/ManageElection/updateElection/${id}`, updatedData),
      ])
      .then((res) => {
        if (res[1].data.updated) {
          navigate("/ManageElection");
        } else {
          console.log(res[1]);
        }
      })
      .catch((err) => console.log(err));
  };

  if (!election) {
    return <div>Loading...</div>;
  }

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
};

export default UpdateElection;