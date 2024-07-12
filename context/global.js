import { create } from "zustand";

export const globalVariables = create((set)=>({
    openSidebar : true,
    auth:null,
    allProducts:null,
    setSearchedProducts: (data)=>set({allProducts:data}),
    signUp: (token)=>set({auth:token}),
    setOpenSidebar : ()=>set((state)=>({
        openSidebar:!state.openSidebar
    }))
}))
