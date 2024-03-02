import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateElection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [electionId, setElectionId] = useState('');
  const [electionName, setElectionName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchElection = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/ElectionRoutes/${id}`);
        setElectionId(response.data.electionId);
        setElectionName(response.data.electionName);
        setStartDate(response.data.startDate);
        setEndDate(response.data.endDate);
      } catch (error) {
        console.error('Error fetching election data:', error);
        toast.error('An error occurred while fetching election data.');
      }
    };

    fetchElection();
  }, [id]);

  async function handleUpdate() {
    e.preventDefault();
    const updatedData = {
      electionId,
      electionName,
      startDate,
      endDate,
    };
    toast.success('Election updated successfully!');

    axios
      ({
        mathod: 'PUT',
        url: `\/ElectionRoutes/${id}`,
        updatedData: updatedData,
      })
      .then((res) => {
        alert(res.data);
        navigate('/manageElections');
      })
      .catch ((err) => 
      {
        alert(e.response.data ?? e);
        console.log(err)
      });
  };

// if (!election) {
//   return <div>Loading...</div>;
// }

return (
  <div className="w-full h-full flex justify-center items-center bg-gray-100">
    <div className="bg-white rounded shadow-md p-8">
      <h2 className="text-2xl font-bold mb-4">Update Election</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
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
