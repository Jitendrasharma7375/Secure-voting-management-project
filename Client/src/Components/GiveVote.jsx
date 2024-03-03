import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios'; // Import axios for making HTTP requests

function GiveVote() {
    const [selectedElection, setSelectedElection] = useState("");
    const [selectedCandidate, setSelectedCandidate] = useState("");

    const [elections, setElections] = useState([]); // State to store elections fetched from MongoDB
    const [candidatesByElection, setCandidatesByElection] = useState({}); // State to store candidates fetched from MongoDB

    // Fetch elections and candidates from MongoDB when the component mounts
    useEffect(() => {
        const fetchElections = async () => {
            try {
                const response = await axios.get('http://localhost:3000/electionRoutes/getElections');
                console.log(response.data);
                setElections(response.data);
            } catch (error) {
                console.error('Error fetching elections:', error);
            }
        };

        const fetchCandidates = async () => {
            try {
                const response = await axios.get('http://localhost:3000/candidateRoutes/getCandidates');
                setCandidatesByElection(response.data.candidatesByElection);
            } catch (error) {
                console.error('Error fetching candidates:', error);
            }
        };
        fetchElections();
        fetchCandidates();
    }, []);

    const handleElectionChange = (e) => {
        //alert(e.target.value);
        var electionId= e.target.value;
        // localStorage.setItem('electionId', e.target.value);
        setSelectedElection(electionId);
        // setSelectedCandidate('');
    };

    const handleVote = async () => {

        try {
            await axios.post('/api/submitVote', {
                Voter_ID: '1', // Replace with actual voter ID
                Candidate_ID: selectedCandidate,
                Election_ID: localStorage.getItem('electionId')
            });
            console.log('Vote submitted for candidate:', selectedCandidate, 'in election:', selectedElection);
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-100 flex justify-center items-center">
                <div className="bg-white shadow-md rounded-md p-6">
                    <h1 className="text-2xl font-bold mb-4">Give Vote</h1>
                    <div className="mb-4">
                        <label htmlFor="election" className="block text-sm font-semibold mb-2">Select Election:</label>
                        <select
                            id="election"
                            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                            value={selectedElection}
                            onChange={handleElectionChange}
                            required
                        >
                            <option value="">Select election</option>
                            {elections.map(election => (
                                <option key={election.electionId} value={election.electionId}>{election.electionName}</option>
                            ))}
                        </select>
                    </div>
                    {selectedElection && (
                        <div className="mb-4">
                            <label htmlFor="candidate" className="block text-sm font-semibold mb-2">Select Candidate:</label>
                            <select
                                id="candidate"
                                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
                                value={selectedCandidate}
                                onChange={(e) => setSelectedCandidate(e.target.value)}
                                required
                            >
                                <option value="">Select candidate</option>
                                {candidatesByElection[selectedElection]?.map(candidate => (
                                    <option key={candidate.id} value={candidate.id}>{candidate.name}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        onClick={handleVote}
                        disabled={!selectedElection || !selectedCandidate}
                    >
                        Submit Vote
                    </button>
                </div>
            </div>
        </>
    );
}

export default GiveVote;
