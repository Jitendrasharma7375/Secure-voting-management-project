
import React, { useEffect, useState } from 'react'


function Home() {

    return (
        <>
            <div className='w-full h-[584px] px-14 py-6 flex flex-col items-center gap-y-3 bg-blue-100 overflow-y-hidden'>
                <input
                    className='inp w-96 sticky top-1 shadow-lg'
                    type={'text'}
                    name='Poll Name'
                    placeholder='Search poll here'
                //value={pollname}
                //onChange={(e) => { setPollName(e.target.value) }}
                />

                <div>Loading...</div>
                <div>Poll Not Found</div>
                <ul className='w-full' >
                </ul>
            </div>
        </>
    )
}

export default Home