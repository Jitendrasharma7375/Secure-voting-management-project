
import React, { useState } from 'react'

function ManageUser() {
	

	return (
		<div className='w-full h-full px-14 py-6 flex flex-col items-center gap-y-3 '>
			<form
				className='flex gap-x-4'
				//onSubmit={handle_search}
			>
				<input
					className='inp w-96'
					type={'text'}
					name='Voter ID'
					placeholder='Search User here'
					//value={userID}
					//onChange={(e) => { setUserID(e.target.value) }}
				/>
				<button
					name='search'
					type='submit'
					className='btn'
				>
					Search User
				</button>
			</form>
			<span></span>
			<form
				className='px-10 py-12 bg-white rounded w-96 flex flex-col gap-y-3 items-center'
			>
				<h1 className='text-3xl text-blue-600' >Manage User</h1>
				<input
					className='inp w-full'
					type='text'
					name='Voter ID'
					placeholder='Voter ID'
					//value={voterID}
					//onChange={(e) => { setVoterID(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='Name'
					placeholder='Name'
					//value={name}
					//onChange={(e) => { setName(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='Password'
					placeholder='Password'
					//value={password}
					//onChange={(e) => { setPassword(e.target.value) }}
				/>
				<label className='w-full -mb-2 font-bold' htmlFor="DOB">Date Of Birth</label>
				<input
					className='inp w-full'
					type='date'
					name='DOB'
					placeholder='Date of Birth'
					//value={DOB}
					//onChange={(e) => { setDOB(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='Roles'
					placeholder='Roles'
					//value={roles}
					//onChange={(e) => { setRoles(e.target.value.trim()) }}
				/>
				<input
					className='inp w-full'
					type='number'
					name='Contact_No'
					placeholder='Contact No.'
					//value={contactNo}
					//onChange={(e) => { setContactNo(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='Address'
					placeholder='Address'
					//value={address}
					//onChange={(e) => { setAddress(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='City'
					placeholder='City'
					//value={city}
					//onChange={(e) => { setCity(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='text'
					name='State'
					placeholder='State'
					//value={state}
					//onChange={(e) => { setState(e.target.value) }}
				/>
				<input
					className='inp w-full'
					type='number'
					name='PIN'
					placeholder='PIN'
					//value={PIN}
					//onChange={(e) => { setPIN(e.target.value) }}
				/>
				
						<button
							name='create'
							type='submit'
							className='btn'
							//onClick={handle_create}
						>
							Create User
						</button>
						<>
							<button
								name='update'
								type='submit'
								className='btn-plain text-white bg-green-600'
								//onClick={handle_update}
							>
								Update User
							</button>
							<button
								name='delete'
								type='submit'
								className='btn-plain text-white bg-red-600'
								//onClick={handle_delete}
							>
								Delete User
							</button>
						</>
				
				<button
					name='cancel'
					type='submit'
					className='inp bg-white text-gray-700'
					//onClick={handle_cancel}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}

export default ManageUser