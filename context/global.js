import { create } from "zustand";

export const globalVariables = create((set)=>({
    openSidebar : true,
    setOpenSidebar : ()=>set((state)=>({
        openSidebar:!state.openSidebar
    }))
}))