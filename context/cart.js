import { create } from "zustand";

export const useCart = create((set)=>({
    items:[],
    selectedItem:null,
    setUpdateCartItem:(item)=>set({selectedItem:item}),
    removeUpdateCartItem:()=>set({selectedItem:null}),
    addToCart:(item)=>{ 
        
        set(state=>({items:[...state.items,item]}))
    },
    updateCart:(index,item)=>{ 
        
        set(state=>{
            let cartItems = [...state.items]
            cartItems[index] = item
            return {items:cartItems}
        })
    },
    removeFromCart:(id)=>{
        set(state=>({items:state.items.filter(item=>item !== state.items[id])}));
    },
    emptyCart:()=>set({items:[]})
}))