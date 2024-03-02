import React from "react";

function Home() {
  // Sample data for recent, running, and upcoming elections
  const recentElectionsResults = [
    { candidate: "Candidate A", votes: 40 },
    { candidate: "Candidate B", votes: 35 },
    { candidate: "Candidate C", votes: 25 },
  ];

  const runningElectionsResults = [
    { candidate: "Candidate 1", votes: 45 },
    { candidate: "Candidate 2", votes: 30 },
    { candidate: "Candidate 3", votes: 25 },
  ];

  const upcomingElectionsResults = [
    { candidate: "Candidate X", votes: 20 },
    { candidate: "Candidate Y", votes: 30 },
    { candidate: "Candidate Z", votes: 50 },
  ];

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Home Page</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Recent Elections</h2>
          <div className="bg-gray-100 p-4 mb-2">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                {recentElectionsResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.candidate}</td>
                    <td>{result.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Running Elections</h2>
          <div className="bg-gray-100 p-4 mb-2">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                {runningElectionsResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.candidate}</td>
                    <td>{result.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Upcoming Elections</h2>
          <div className="bg-gray-100 p-4 mb-2">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Candidate</th>
                  <th>Votes</th>
                </tr>
              </thead>
              <tbody>
                {upcomingElectionsResults.map((result, index) => (
                  <tr key={index}>
                    <td>{result.candidate}</td>
                    <td>{result.votes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
