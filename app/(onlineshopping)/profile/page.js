"use client"
import { Avatar, AvatarImage,AvatarFallback } from '@/components/ui/avatar'
import { StoredCookie } from '@/constants/functions';
import { useAuth } from '@/context/auth';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { FaCamera } from 'react-icons/fa'

function Settings() {
  const fileInputRef = useRef(null);
  const [profile,setProfile] = useState(null)
  const {getToken} = StoredCookie()

  
  const handleCameraClick = () => {
    
    fileInputRef.current.click();
  };

  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file);
  
    }
  };

  const auth = useAuth(state=>state.user)

  

  useEffect(() => {
    const token = getToken();
    if (token) {
      axios
        .get(`http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/user/${auth?.userID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res,"is the data")
          setProfile(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  
  return (
    <div className='flex flex-col items-center w-full gap-y-4'>
      <h1 className='md:text-2xl text-xl text-center text-gray-400'>My Profile</h1>

      <div className='rounded-md w-[90%] justify-center'>
        <div className="relative w-fit h-fit">
        <Avatar className='bg-green-400 w-20 h-20'>
          <AvatarFallback>FN</AvatarFallback>
          <AvatarImage src="/male_avatar.webp" className='bg-gray-200 ' alt="male_avatar" />
        </Avatar>
        <span className='absolute bottom-0 right-0'>
          <FaCamera className='w-5 h-5 text-gray-600 cursor-pointer hover:scale-105' onClick={handleCameraClick} />
          <input type='file' className='hidden' ref={fileInputRef} onChange={handleFileChange} />
        </span>
        </div>
      </div>
      <div className='rounded-md border-gray-300 border-[0.4px] w-[90%] p-4'>
        <h1 className='text-gray-900 font-bold text-md'>Personnal Information</h1>
        <div className='flex justify-between w-full'>
          <div>
            <h1 className='text-gray-400 font-semibold'>Name</h1>
            <h2>{profile?.name || "loading..."}</h2>
          </div>
          <div>
            <h1 className='text-gray-400 font-semibold'>Email</h1>
            <h2>{profile?.email || "loading..."}</h2>
          </div>

        </div>
        <div>
          <div>
            <h1 className='text-gray-400 font-semibold'>Contacts</h1>
            <h2>+{profile?.mobile || "loading..."}</h2>
          </div> 
        </div>

      </div>
      <div className='rounded-md border-gray-300 border-[0.4px] w-[90%] p-4'>
        <h1 className='text-gray-800 font-bold'>Address</h1>
        <div>
          <div>
            <h1 className='text-gray-400 font-semibold'>Country</h1>
            <h2>Tanzania</h2>
          </div>
          <div>
            <h1 className='text-gray-400 font-semibold'>Region</h1>
            <h2>Dar es Salaam</h2>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Settings