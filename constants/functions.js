import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useAuth } from "@/context/auth";
import { jwtDecode } from "jwt-decode";



export const StoredCookie = () => {
  const [cookies, setCookie] = useCookies(["token"]);
  //   const [token, setToken] = useState('');
  const { setToken, setUser } = useAuth();

  const saveToken = (token) => {
    
    setCookie("token", token, {
      path: "/",
      secure: false,
      sameSite: "Strict",
    });
  };

  const getToken = () => {
    const encryptedToken = cookies.token;
    if (encryptedToken) {

      try {
       
        const user = jwtDecode(encryptedToken);

        setUser(user);
      } catch (error) {
        console.error("Invalid token", error);
        return null;
      } finally {
        return encryptedToken;
      }
    }
    return null;
  };

 

  return { getToken, saveToken };
};
