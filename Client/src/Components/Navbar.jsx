import { useState, useEffect } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Navbar() {
	const [elections, setElection] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3000/ElectionRoutes/updateElection/:id")
			.then((res) => {
				setElection(res.data.elections);
			}).catch((err) => console.log(err));
	}, []);

	return (
		<>
			<nav className='bg-blue-500 top-0 fixed w-full flex items-center min-h-[8vh] px-5 justify-between'>
				<div className="left flex text-white">
					<div className="logo font-bold text-2xl">SVMS</div>
					<ul className='flex ml-4 items-center space-x-4 '>
						<Link to={"/Home"}><li>Home</li></Link >
						<Link to={"/Profile"}><li>Admin Profile</li></Link>
						<Link to={{ pathname: "/ManageElection", state: { elections: elections } }}><li>Manage Election</li></Link>
						<Link to={"/ManageVoter"}><li>Manage Voter</li></Link>
						<Link to={"/givevote"}><li>Give Vote</li></Link>
					</ul>
				</div>
				<Link to={"/Signin"}><button className='text-white'>Sign Out</button></Link>
			</nav>
		</>
	)
}

export default Navbar