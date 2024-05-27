import { create } from "zustand";

export const globalVariables = create((set)=>({
    openSidebar : false,
    setOpenSidebar : ()=>set((state)=>({
        openSidebar:!state.openSidebar
    }))
}))