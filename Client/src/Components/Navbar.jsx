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
			<nav className='bg-blue-500 top-0 fixed w-full flex items-center min-h-[8vh] px-5 justify-between t'>
				<div className="left flex text-white">
					<div className="logo font-bold text-2xl">SVMS</div>
					<ul className='flex ml-4 items-center space-x-4 mt-2 no-underlin'>
						<Link to={"/Home"}><li className='text-white '>Home</li></Link >
						<Link to={{ pathname: "/ManageElection", state: { elections: elections } }}><li className='text-white'>Manage Election</li></Link>
						<Link to={"/ManageVoter"}><li className='text-white'>Manage Voter</li></Link>
						<Link to={"/givevote"}><li className='text-white'>Give Vote</li></Link>
					</ul>
				</div>
				<Link to={"/Signin"}><button className='text-white'>Sign Out</button></Link>
			</nav>
		</>
	)
}

export default Navbar