import React from 'react'
import { Link } from 'react-router-dom'

function VoterNavbar() {

	return (
		<>
			<nav className='bg-blue-500 top-0 fixed w-full flex items-center min-h-[8vh] px-5 justify-between t'>
				<div className="left flex text-white">
					<div className="logo font-bold text-2xl">SVMS</div>
					<ul className='flex ml-4 items-center space-x-4 mt-2 no-underlin'>
						<Link to={"/VoterHome"}><li className='text-white'>Voter Dasboard</li></Link>
						<Link to={"/GiveVote"}><li className='text-white'> Voter</li></Link>
					
					</ul>
				</div>
				<Link to={"/Signin"}><button className='text-white'>Sign Out</button></Link>
			</nav>
		</>
	)
}

export default VoterNavbar