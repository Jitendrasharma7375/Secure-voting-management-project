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
            path: "updateElection",
            element: <UpdateElection />
          },
          {
            path: "updateElection/:id",
            element: <UpdateElection />
          },
          {
            path: "deleteElection",
            element: <DeleteElection />
          }
        ]
      },
      {
        path: "Signout",
        element: <Signin />
      },
      {
        path: "Signin",
        element: <Signin />
      }
    ]
  },
]);

export default App;