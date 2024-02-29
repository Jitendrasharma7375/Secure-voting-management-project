import React from 'react'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import ManageCandidate from './Components/ManageCandidate'
import Profile from './Components/Profile'
import ManageElection from './Components/ManageElection'
import Navbar from './Components/Navbar'
import AddVoterForm from './Components/AddVoterForm'
import Voters from './Components/Voters'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
        path: "/adminProfile",
        element: <Profile />
      },
      {
        path: "/manageElection",
        element: <ManageElection />
      }
    ]
  },

])

export default App
