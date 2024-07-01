import { create } from 'zustand'

export const useAuth = create((set) => ({
  token: null,
  user:null,
  setUser: (user) => set({ user:user }),
  saveToken: (token) => set({ token: token }),
   
}))

