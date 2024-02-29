import React from 'react';

function Home() {
  // Sample data for running, past, and upcoming elections
  const runningElections = [
    { id: 1, name: 'Running Election 1' },
    { id: 2, name: 'Running Election 2' },
    { id: 3, name: 'Running Election 3' },
  ];

  const pastElections = [
    { id: 4, name: 'Past Election 1' },
    { id: 5, name: 'Past Election 2' },
  ];

  const upcomingElections = [
    { id: 6, name: 'Upcoming Election 1' },
    { id: 7, name: 'Upcoming Election 2' },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Home Page</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Running Elections</h2>
        {runningElections.map(election => (
          <div key={election.id} className="bg-gray-100 p-4 mb-2">
            {election.name}
          </div>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Past Elections</h2>
        {pastElections.map(election => (
          <div key={election.id} className="bg-gray-100 p-4 mb-2">
            {election.name}
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Upcoming Elections</h2>
        {upcomingElections.map(election => (
          <div key={election.id} className="bg-gray-100 p-4 mb-2">
            {election.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
