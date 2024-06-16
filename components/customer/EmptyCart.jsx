import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { FaTrash } from "react-icons/fa";
import { Button } from "../ui/button";
import { useCart } from "@/context/cart";
import gsap, { Power4 } from "gsap";
import { useToast } from "../ui/use-toast";

function EmptyCart() {
  const emptyCart = useCart((state) => state.emptyCart);
  const {toast} = useToast()


  const handleEmptyCart = () => {
    emptyCart();
    animateIcon();
    return toast({
      title: "Success",
      description: "Cart emptied",
      className: "bg-blue-500 text-white",
      duration: 2000,
    });
  };

  const animateIcon = () => {
    const icon = "#cartIcon";

    const tl = gsap.timeline();

    tl.to(icon, {
      x: "-=2", // Move left
      duration: 0.1,
      ease: Power4.easeOut,
    })
      .to(icon, {
        x: "+=4", // Move right
        duration: 0.2,
        ease: Power4.easeInOut,
      })
      .to(icon, {
        x: "-=4", // Move left
        duration: 0.2,
        ease: Power4.easeInOut,
      })
      .to(icon, {
        x: "+=2", // Move right to settle
        duration: 0.1,
        ease: Power4.easeIn,
      });

    tl.play();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center my-2 gap-x-5 px-2 text-red-600">
          <FaTrash />
          <span>Empty the cart</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will remove all your items in the
            cart
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className='bg-red-600 text-white' onClick={handleEmptyCart}>Yes empty cart!</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EmptyCart;
