import React from 'react'
import Navbar from './Navbar';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCandidate = () => {
    const [numCandidates, setNumCandidates] = useState(1);
    const [candidates, setCandidates] = useState([]);
    const [name, setName] = useState('');
    const [party, setParty] = useState('');
    const [age, setAge] = useState('');
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');

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
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/candidateRoutes/createCandidate", {
                totalCandidate,
                name,
                party,
                age,
                district,
                state
            });
            if (response.data.added) {
                toast.success('Candidate Added successfully!');
                console.log('Candidate Added successfully!')
                console.log(response)
                setTimeout(() => {
                    window.location.href = "/manageElection";
                }, 1000);
            } else {
                console.log(response);
            }
        } catch (error) {
            console.error('Error submitting candidate:', error);
            toast.error('An error occurred while submitting the candidate details.');
        }
    };
    return (
        <>
            <Navbar />
            <div className='w-full h-full flex justify-center items-center mt-14'>
                <form action="">
                    <div className="flex flex-col">
                        <label htmlFor="numCandidates" className="font-semibold m-2">Number of Candidates</label>
                        <select
                            id="numCandidates"
                            className="border border-gray-300 rounded px-3 py-2 m-2 focus:outline-none focus:border-blue-500"
                            value={numCandidates}
                            onChange={(e) => {
                                setNumCandidates(parseInt(e.target.value));
                                setCandidates([]);
                                setNumCandidates(e.target.value);
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
                                    onChange={(e) => {
                                        handleCandidateChange(index, 'name', e.target.value);
                                        setName(e.target.value)
                                    }
                                    }
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
                                    onChange={(e) => {
                                        handleCandidateChange(index, 'party', e.target.value);
                                        setParty(e.target.value)
                                    }}
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
                                    onChange={(e) => {
                                        handleCandidateChange(index, 'age', e.target.value);
                                        setAge(e.target.value)
                                    }}
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
                                    onChange={(e) => {
                                        handleCandidateChange(index, 'district', e.target.value);
                                        setDistrict(e.target.value)
                                    }}
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
                                    onChange={(e) => {
                                        handleCandidateChange(index, 'state', e.target.value);
                                        setState(e.target.value)
                                    }}
                                    required
                                />
                            </div>
                        </div>
                    ))}
                    <button type="button" onClick={handleAddCandidate} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Add Candidate</button>
                    <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 m-2">Submit</button>
                </form>
            </div>
        </>
    )
}

export default AddCandidate
