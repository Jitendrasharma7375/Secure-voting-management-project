import React, { useState } from 'react';

function GiveVote() {
    const [selectedElection, setSelectedElection] = useState('');
    const [selectedCandidate, setSelectedCandidate] = useState('');

    // Sample data for elections and candidates
    const elections = [
        { id: 1, name: "Election 1" },
        { id: 2, name: "Election 2" },
        { id: 3, name: "Election 3" }
    ];

    // Sample data for candidates (assuming candidates are different for each election)
    const candidatesByElection = {
        1: [
            { id: 101, name: "Candidate A" },
            { id: 102, name: "Candidate B" }
        ],
        2: [
            { id: 201, name: "Candidate X" },
            { id: 202, name: "Candidate Y" }
        ],
        3: [
            { id: 301, name: "Candidate I" },
            { id: 302, name: "Candidate II" }
        ]
    };

    const handleElectionChange = (e) => {
        setSelectedElection(e.target.value);
        // Reset selected candidate when a new election is selected
        setSelectedCandidate('');
    };

    const handleVote = () => {
        // Logic to submit the vote
        console.log('Vote submitted for candidate:', selectedCandidate, 'in election:', selectedElection);
    };

    return (
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
                            <option key={election.id} value={election.id}>{election.name}</option>
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
                            {candidatesByElection[selectedElection].map(candidate => (
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
    );
}

export default GiveVote;
