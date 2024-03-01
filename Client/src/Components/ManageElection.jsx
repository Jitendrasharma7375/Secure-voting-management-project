import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

function ManageElection() {
   
    return (
        <>
            <div className="py-5 min-h-[100vh] h-auto">
                <div className="flex items-center justify-center mt-[60px] space-x-3">
                    <Link to={"/manageElection/createElection"}>
                        <button className='border bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md'>Create Election</button>
                    </Link>
                    <Link to={"/manageElection/updateElection"}>
                        <button className='border bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md'>Update Election</button>
                    </Link>
                    <Link to={"/manageElection/deleteElection"}>
                        <button className='border bg-blue-500 text-white font-semibold px-3 py-1 cursor-pointer rounded-md'>Delete Election</button>
                    </Link>
                </div>
                <Outlet />
            </div>
        </>
    );
}

export default ManageElection