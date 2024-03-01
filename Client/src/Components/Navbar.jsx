import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

	return (
		<>
			<nav className='bg-blue-500 top-0 fixed w-full flex items-center min-h-[8vh] px-5 justify-between'>
				<div className="left flex text-white">
					<div className="logo font-bold text-2xl">SVMS</div>
					<ul className='flex ml-4 items-center space-x-4 '>
						<Link to={"/Home"}><li>Home</li></Link >
						<Link to={"/Profile"}><li>Admin Profile</li></Link>
						<Link to={"/ManageElection"}><li>Manage Election</li></Link>
						<Link to={"/ManageVoter"}><li>Manage Voter</li></Link>
					</ul>
				</div>
				<Link to={"/Signin"}><button className='text-white'>Sign Out</button></Link>
			</nav>
		</>
	)
}

export default Navbar