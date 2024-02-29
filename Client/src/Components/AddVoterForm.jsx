import React, { useRef, useState } from 'react'
import { voterData } from '../constant/constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../constant/firebase';


const AddVoterForm = () => {
    const id = useRef(null);
    const VoterName = useRef(null);
    const Age = useRef(null);
    const [Gender, setGender] = useState("");
    const wardNumber = useRef(null);
    const pincode = useRef(null);
    const district = useRef(null);
    const state = useRef(null);

    const handleVoterData = () => {
        addDoc(collection(db, "voterData"), {
            id: id.current.value,
            voterName: VoterName.current.value,
            Age: Age.current.value,
            gender: Gender,
            WardNumber: wardNumber.current.value,
            pincode: pincode.current.value,
            District: district.current.value,
            State: state.current.value
        })
        toast.success("Voter Added Successfully", {
            position: "top-center",
            autoClose: 2000
        })
        id.current.value = " ";
        VoterName.current.value = " ";
        Age.current.value = " ";
        setGender(" ");
        wardNumber.current.value = " ";
        pincode.current.value = " ";
        district.current.value = " ";
        state.current.value = " ";
    }

    return (
        <>
            <ToastContainer />
            <div className=' w-[50%] mx-auto'>
                <form onSubmit={(e) => e.preventDefault()} action="">
                    <div>
                        <label htmlFor="">Voter ID</label>
                        <input ref={id} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="text" placeholder='ID' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Voter Name</label>
                        <input ref={VoterName} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="text" placeholder='Name' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Age</label>
                        <input ref={Age} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="Number" placeholder='Age' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Gender</label>
                        <select value={Gender} onChange={(e) => setGender(e.currentTarget.value)} className='block w-full px-2 py-2 bg-gray-200' name="" id="">
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Ward Number</label>
                        <input ref={wardNumber} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="number" placeholder='Ward Number' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">Pincode</label>
                        <input ref={pincode} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="text" placeholder='Pincode' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">City</label>
                        <input ref={district} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="text" placeholder='City' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="">State</label>
                        <input ref={state} className='block px-2 py-2 bg-gray-200 outline-none rounded-md w-full' type="text" placeholder='State' />
                    </div>
                    <button onClick={handleVoterData} className='rounded-md border bg-blue-500 px-3 py-1 cursor-pointer w-full mt-3 text-white font-bold '>Add Voter</button>
                </form>
            </div>
        </>
    )
}

export default AddVoterForm
