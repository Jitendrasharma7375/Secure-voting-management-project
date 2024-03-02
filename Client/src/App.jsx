import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import ManageCandidate from './Components/ManageCandidate';
import Profile from './Components/Profile';
import ManageElection from './Components/ManageElection';
import Navbar from './Components/Navbar';
import AddVoterForm from './Components/AddVoterForm';
import Voters from './Components/Voters';
import CreateElection from './Components/CreateElection';
import UpdateElection from './Components/UpdateElection';
import DeleteElection from './Components/DeleteElection';
import SignOut from './Components/Signout';
import Signin from './Components/Signin';
import GiveVote from './Components/GiveVote';

const App = () => {
  return (
    <div>
      <Navbar />
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
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/manageElection",
        element: <ManageElection />,
        children: [
          {
            path: "createElection",
            element: <CreateElection />
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
          }
        ]
      },
      {
        path: "/signout",
        element: <Signin />
      },

    ]
  },
]);

export default App;
