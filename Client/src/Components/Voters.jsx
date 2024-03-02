import React, { useEffect, useState } from 'react'
import { details, } from '../constant/constant';
import { collection, getDoc, getDocs } from 'firebase/firestore';
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
            <div className='flex mt-10 cursor-pointer justify-between px-5  transition-all duration-100 delay-100 bg-black text-white  w-[70%] py-2  rounded-md mx-auto shadow-lg'>
                {details.map((items) => {
                    const { id, VoterName, Age, gender, WardNumber, pincode, District, State } = items;
                    return (
                        <>

                            <h2>{id}</h2>
                            <h2>{VoterName}</h2>
                            <h2>{Age}</h2>
                            <h3>{gender} </h3>
                            <h3>{WardNumber}</h3>
                            <h3>{pincode}</h3>
                            <h3>{District}</h3>
                            <h3>{State}</h3>
                        </>
                    )
                })}
            </div>
            {voterData.length === 0 ? <h1>Loading....</h1> : <div className='mt-5'>
                {
                    voterData.map((items) => {
                        const { id, voterName, Age, gender, wardNumber, pincode, District, State } = items;
                        return (
                            <>
                                <div className='flex mt-3 cursor-pointer justify-between px-5  hover:bg-black hover:text-white transition-all duration-100 delay-100 bg-gray-200  w-[70%] py-2 rounded-md mx-auto shadow-lg'>
                                    <h2>{id}</h2>
                                    <h2>{voterName}</h2>
                                    <h2>{Age}</h2>
                                    <h3>{gender} </h3>
                                    <h3>{wardNumber}</h3>
                                    <h3>{pincode}</h3>
                                    <h3>{District}</h3>
                                    <h3>{State}</h3>
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
