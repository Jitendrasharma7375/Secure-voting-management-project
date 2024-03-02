import React, { useEffect, useState } from 'react'
import { details, } from '../constant/constant';
import { collection,  getDocs } from 'firebase/firestore';
import { db } from '../constant/firebase';
import Navbar from './Navbar';

const Voters = () => {
    const [voterData, setVoterData] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = []
        const collectionRef = collection(db, "voterData");
        const snapShot = await getDocs(collectionRef);
        snapShot.forEach((doc) => data.push(doc.data()));
        setVoterData(data)
    }
    return (
        <>
            <Navbar />
            <div className='flex mt-10  cursor-pointer justify-around px-5  transition-all duration-100 delay-100 bg-black text-white  w-[70%] py-2  rounded-md mx-auto shadow-lg '>
                {details.map((items) => {
                    const { id, VoterName, Age, gender, WardNumber, pincode, District, State } = items;
                    return (
                        <>
                            <h2 className='text-base'>{id}</h2>
                            <h2 className='text-base'>{VoterName}</h2>
                            <h2 className='text-base'>{Age}</h2>
                            <h3 className='text-base'>{gender} </h3>
                            <h3 className='text-base'>{WardNumber}</h3>
                            <h3 className='text-base'>{pincode}</h3>
                            <h3 className='text-base'>{District}</h3>
                            <h3 className='text-base'>{State}</h3>
                        </>
                    )
                })}
            </div>
            {voterData.length === 0 ? <h1 className='text-base'>Loading....</h1> : <div className='mt-5'>
                {
                    voterData.map((items) => {
                        const { id, voterName, Age, gender, wardNumber, pincode, District, State } = items;
                        return (
                            <>
                                <div className='flex m-2 cursor-pointer justify-around hover:bg-black hover:text-white transition-all duration-100 delay-100 bg-gray-200  w-[70%] py-2 rounded-md mx-auto shadow-lg'>
                                    <h2 className='text-base'>{id}</h2>
                                    <h2 className='text-base'>{voterName}</h2>
                                    <h2 className='text-base'>{Age}</h2>
                                    <h3 className='text-base'>{gender} </h3>
                                    <h3 className='text-base'>{wardNumber}</h3>
                                    <h3 className='text-base'>{pincode}</h3>
                                    <h3 className='text-base'>{District}</h3>
                                    <h3 className='text-base'>{State}</h3>
                                </div>
                            </>
                        )
                    })
                }
            </div>}
        </>
    )
}

export default Voters
