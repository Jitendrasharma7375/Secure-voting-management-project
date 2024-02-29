import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<>
			<nav className='bg-blue-500 fixed w-full flex items-center min-h-[8vh] px-5 justify-between'>
				<div className="left flex text-white">
					<div className="logo font-bold text-2xl">CMS</div>
					<ul className='flex ml-4 items-center space-x-4 '>
						<li>Home</li>
						<li>Admin Profile</li>
						<Link to={"/ManageElection"}><li>Manage Election</li></Link>
						<Link to={"/ManageVoter"}><li>Manage Voter</li></Link>
					</ul>
				</div>
				<button>Sign Out</button>
			</nav>
		</>
	)
}

export default Navbar