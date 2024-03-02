import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory

function DeleteElection() {
  const [electionId, setElectionId] = useState("");

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:3000/ElectionRoutes/deleteElection/${electionId}`
      );

      if (response.data.message === "Election deleted successfully") {
        toast.success("Election deleted successfully!");
        console.log("Election deleted successfully!");

        // Redirect or update the UI as needed
      } else {
        console.log(response);
        toast.error("Failed to delete election.");
      }
    } catch (error) {
      console.error("Error deleting election:", error);
      toast.error("An error occurred while deleting the election.");
    }
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="w-full h-full flex justify-center items-center bg-gray-100">
        <div className="bg-white rounded shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4">Delete Election</h2>
          <form onSubmit={handleDelete} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="electionId" className="font-semibold mb-1">
                Election ID
              </label>
              <input
                type="text"
                id="electionId"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={electionId}
                onChange={(e) => setElectionId(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Delete Election
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default DeleteElection;