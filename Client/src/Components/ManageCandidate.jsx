import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const ManageCandidate = () => {
	return (
		<>
		<Navbar />
			<div className="py-5 min-h-[100vh] h-auto">
				<div className="flex items-center justify-center mt-[60px] space-x-3">
					<Link to={"/manageVoter/AllVoters"}>
						<button className='border bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md'>Show Voters</button>
					</Link>
					<Link to={"/manageVoter/addVoter"}><button className='border bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md'>Add Voters</button></Link>
				</div>
				<Outlet />
			</div>
		</>
	)
}

export default ManageCandidate
