"use client"
import React, { useEffect } from 'react'
import { Toaster } from '../ui/toaster'
import { StoredCookie } from '@/constants/functions';
import { useAuth } from '@/context/auth';


function MainCustomer({children}) {
    const {getToken} = StoredCookie();
    const auth = useAuth(state=>state.user)

    useEffect(()=>{
       const res =  getToken()


    },[])


  return (
    <section className="md:mt-20 mt-24">
        {children}
        <Toaster />
        </section>
  )
}

export default MainCustomer