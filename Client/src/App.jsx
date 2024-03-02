import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ManageCandidate from './Components/ManageCandidate';
import ManageElection from './Components/ManageElection';
import AddVoterForm from './Components/AddVoterForm';
import Voters from './Components/Voters';
import CreateElection from './Components/CreateElection';
import UpdateElection from './Components/UpdateElection';
import DeleteElection from './Components/DeleteElection';
import Signin from './Components/Signin';
import GiveVote from './Components/GiveVote';
import AddCandidate from './Components/AddCandidate';


const App = () => {

  return (
    <div>
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/",
        element: <Signin />
      },
      {
        path: "/signin",
        element: <Signin />
      },
      {
        path: "/givevote",
        element: <GiveVote />
      },
      {
        path: "/manageVoter",
        element: <ManageCandidate />,
        children: [
          {
            path: "/manageVoter/addVoter",
            element: <AddVoterForm />
          },
          {
            path: "/manageVoter/AllVoters",
            element: <Voters />
          }
        ]
      },
      {
        path: "/manageElection",
        element: <ManageElection />,
        children: [
          {
            path: "createElection",
            element: <CreateElection />,
          },
          {
            path: "updateElection", // Corrected path
            element: <UpdateElection />
          },
          {
            path: "/manageElection/updateElection/:id", // Corrected path
            element: <UpdateElection />
          },
          {
            path: "/manageElection/deleteElection",
            element: <DeleteElection />
          },
        ]
      },
      {
        path: "/signout",
        element: <Signin />
      },
      {
        path:"/addCandidate",
        element:<AddCandidate/>
      }
    ]
  },
]);

export default App;
