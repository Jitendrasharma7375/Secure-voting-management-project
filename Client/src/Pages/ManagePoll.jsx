import React, { useState } from 'react'

function ManagePoll() {

    return (
        <div className='w-full h-full px-14 py-6 flex flex-col items-center gap-y-3 bg-blue-100'>
            <form
                className='flex gap-x-4'
                method="POST"
            //onSubmit={handle_search}
            >
                <input
                    className='inp w-96 sticky top-1 shadow-lg'
                    type={'text'}
                    name='Poll ID'
                    placeholder='Search poll here'
                //value={pollID}
                //onChange={(e) => { setPollID(e.target.value) }}
                />
                <button
                    name='search'
                    type='submit'
                    className='btn-plain bg-blue-600 text-white w-40 h-10 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out'
                >
                    Search Poll
                </button>
            </form>
            <span></span>
            <form
                className='px-10 py-12 bg-white rounded w-96 flex flex-col gap-y-3 items-center'
            >
                <h1 className='text-3xl text-blue-600' >Manage Poll</h1>
                <input
                    className='inp w-full sticky top-1 shadow-lg'
                    type='text'
                    name='Name'
                    placeholder='Name'
                //value={name}
                />
                <label className='w-full -mb-2 font-bold' htmlFor="Start_Date">Start Time and Date</label>
                <div className='flex gap-x-2 w-full'>
                    <input
                        className='inp w-full'
                        type='date'
                        name='Start_Date'
                        placeholder='Opening Date'
                    //value={startDate}
                    //onChange={(e) => { setStartDate(e.target.value) }}
                    />
                    <input
                        className='inp'
                        type='time'
                        name='Start_Time'
                        placeholder='Opening Time'
                    //value={startTime}
                    //onChange={(e) => { setStartTime(e.target.value) }}
                    />
                </div>
                <label className='w-full -mb-2 font-bold' htmlFor="End_Date">End Time and Date</label>
                <div className='flex gap-x-2 w-full'>
                    <input
                        className='inp'
                        type='date'
                        name='End_Date'
                        placeholder='Closing Date'
                    //value={endDate}
                    //onChange={(e) => { setEndDate(e.target.value) }}
                    />
                    <input
                        className='inp'
                        type='time'
                        name='End_Time'
                        placeholder='Closing Time'
                    //value={endTime}
                    //onChange={(e) => { setEndTime(e.target.value) }}
                    />
                </div>
                <input
                    className='inp w-full'
                    type='text'
                    name='WhoCan'
                    placeholder='Who can vote?'
                //value={whoCan}
                //onChange={(e) => { setWhoCan(e.target.value.trim()) }}
                />
                <input
                    className='inp w-full'
                    type='text'
                    name='Candidates'
                    placeholder='Enter Candidates'
                //value={candidates}
                //onChange={(e) => { setCandidates(e.target.value.trim()) }}
                />


                <button
                    name='create'
                    type='submit'
                    className='btn'
                //onClick={handle_create}
                >
                    Create Poll
                </button>
                <>
                    <button
                        name='update'
                        type='submit'
                        className='btn-plain text-white bg-green-600'
                    //onClick={handle_update}
                    >
                        Update Poll
                    </button>
                    <button
                        name='delete'
                        type='submit'
                        className='btn-plain text-white bg-red-600'
                    //onClick={handle_delete}
                    >
                        Delete Poll
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

export default ManagePoll