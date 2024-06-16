import { create } from "zustand";

export const globalVariables = create((set)=>({
    openSidebar : true,
    auth:null,
    signUp: (token)=>set({auth:token}),
    setOpenSidebar : ()=>set((state)=>({
        openSidebar:!state.openSidebar
    }))
}))