import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateElection() {
    const [electionId, setElectionId] = useState('');
    const [electionName, setElectionName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [numCandidates, setNumCandidates] = useState(1);
    const [candidates, setCandidates] = useState([]);

    const handleCandidateChange = (index, field, value) => {
        const updatedCandidates = [...candidates];
        updatedCandidates[index][field] = value;
        setCandidates(updatedCandidates);
    };

    const handleAddCandidate = () => {
        if (candidates.length < numCandidates) {
            setCandidates([...candidates, { name: '', party: '', age: '', district: '', state: '' }]);
        } else {
            toast.error(`You can only add ${numCandidates} candidates.`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
<ToastContainer />
<div className="w-full h-full flex justify-center items-center bg-gray-100">
<div className="bg-white rounded shadow-md p-8">
    <h2 className="text-2xl font-bold mb-4">Create Election</h2>
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
        <div className="flex flex-col">
            <label htmlFor="numCandidates" className="font-semibold mb-1">Number of Candidates</label>
            <select
                id="numCandidates"
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                value={numCandidates}
                onChange={(e) => {
                    setNumCandidates(parseInt(e.target.value));
                    setCandidates([]);
                }}
                required
            >
                {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                ))}
            </select>
        </div>
        {candidates.map((candidate, index) => (
            <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold mb-2">Candidate {index + 1}</h3>
                <div className="flex flex-col">
                    <label htmlFor={`candidateName${index}`} className="font-semibold mb-1">Name</label>
                    <input
                        type="text"
                        id={`candidateName${index}`}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        value={candidate.name}
                        onChange={(e) => handleCandidateChange(index, 'name', e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`candidateParty${index}`} className="font-semibold mb-1">Party</label>
                    <input
                        type="text"
                        id={`candidateParty${index}`}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        value={candidate.party}
                        onChange={(e) => handleCandidateChange(index, 'party', e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`candidateAge${index}`} className="font-semibold mb-1">Age</label>
                    <input
                        type="number"
                        id={`candidateAge${index}`}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        value={candidate.age}
                        onChange={(e) => handleCandidateChange(index, 'age', e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`candidateDistrict${index}`} className="font-semibold mb-1">District</label>
                    <input
                        type="text"
                        id={`candidateDistrict${index}`}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        value={candidate.district}
                        onChange={(e) => handleCandidateChange(index, 'district', e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor={`candidateState${index}`} className="font-semibold mb-1">State</label>
                    <input
                        type="text"
                        id={`candidateState${index}`}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                        value={candidate.state}
                        onChange={(e) => handleCandidateChange(index, 'state', e.target.value)}
                        required
                    />
                </div>
            </div>
        ))}
        <button type="button" onClick={handleAddCandidate} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Candidate</button>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Create Election</button>
    </form>
</div>
</div>
        </>
    );
}

export default CreateElection;
