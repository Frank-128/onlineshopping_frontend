"use client"
import React, { useEffect } from 'react'
import { Toaster } from '../ui/toaster'
import { StoredCookie } from '@/constants/functions';
import { useAuth } from '@/context/auth';
import axios from "axios";
import {globalVariables} from "@/context/global";


function MainCustomer({children}) {
    const {getToken} = StoredCookie();
    const auth = useAuth(state=>state.user)
    const {setSearchedProducts} = globalVariables()

    useEffect(()=>{
       const res =  getToken()


    },[])

    useEffect(() => {
        axios
            .get("http://onlineshopping.southafricanorth.cloudapp.azure.com/backend/api/v1/search/items")
            .then((res) => {
                setSearchedProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


  return (
    <section className="md:mt-20 mt-24 font-libre">
        {children}
        <Toaster />
        </section>
  )
}

export default MainCustomer
