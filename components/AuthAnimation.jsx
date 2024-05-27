"use client"

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";


const FadeIn = ({ children, stagger = 0, x = 0, ref }) => {
  const el = useRef(null);
  const animation = useRef(null);

  useGSAP(() => {
    gsap.fromTo(".animation_header", {
      opacity: 0,
      stagger,
      x:-100,
    },
    {
        opacity: 1,
        x:50,
      }
);
  }, []);

  useGSAP(() => {
    // forward the animation instance
    if (typeof ref === "function") {
      ref(animation.current);
    } else if (ref) {
      ref.current = animation.current;
    }
  }, [ref]);

  return <span ref={el}>{children}</span>;
};

const AuthAnimation = () => {
    useGSAP(() => {
        gsap.fromTo(".animation_header", {
          opacity: 0,
          stagger:0.2,
          x:-100,
          duration:8
        },
        {
            opacity: 1,
            duration:1,
            x:50,
          }
    );
      }, []);

      useGSAP(() => {
        gsap.fromTo(".animation_picture", {
          opacity: 0,
          stagger:0.8,
          y:100,
        },
        {
            opacity: 1,
            y:10,
            duration:1
          }
    );

    gsap.fromTo(".welcome", {
        opacity: 0,
      },
      {
          opacity: 1,
          duration:1.5
        }
  );

  gsap.fromTo(".slogan", {
    opacity: 0,
  },
  {
      opacity: 1,
      duration:3,
      delay:1
    }
);

gsap.fromTo(".box", {
    opacity: 0,
    y:-100
  },
  {
      opacity: 1,
      y:200,
      duration:1
    }
);


      }, []);

  return (
    <div className="app basis-1/2 hidden bg-gray-200 md:flex flex-col items-center justify-center gap-2">
     
      <div className="box  opacity-0 animation_headerfont-extrabold text-transparent text-3xl bg-clip-text  bg-gradient-to-r from-purple-400 to-pink-600">Online shopping</div>
     <div className="welcome opacity-0 text-3xl text-[#aeb0b3]">Welcome,</div>
     <div className="slogan max-md:text-4xl text-xl text-gray-500 opacity-0">Shop with us at fair prices start now!!</div>
      <Image className="opacity-0 animation_picture" src={'/shopping_cart.png'} width={400} height={400} />
      
    </div>
  );
};

export default AuthAnimation;
