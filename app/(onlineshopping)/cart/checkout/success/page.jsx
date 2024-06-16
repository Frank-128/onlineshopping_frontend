"use client"
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import Motorcycle from '@/components/customer/MotorCycle';
import { FaCheck } from 'react-icons/fa';
import { set } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';



function Success() {
    const [countDown,setCountDown] = useState({hours:5,minutes:40,seconds:60});

    const [width, setWidth] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth > 700 ? 500 : 200);
    };

   
    window.addEventListener('resize', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Motorcycle arriving
    timeline.to('.motorcycle', {
      duration: 2,
      x: width, // Adjust according to your screen size
      ease: 'power2.out',
    });

    // Fire effect
    timeline.to('#fire', {
      duration: 0.5,
      opacity: 1,
      scale: 1.5,
      repeat: 5,
      yoyo: true,
      ease: 'power1.inOut',
    }, "-=1");

    // Motorcycle taking off
    timeline.to('.motorcycle', {
      duration: 2,
      x: 10000, // Adjust according to your screen size
      ease: 'power2.in',
    }, "+=1");

  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countDown.hours === 0 && countDown.minutes === 0 && countDown.seconds === 0) {
        clearInterval(timer);
      } else {
        setCountDown(prevTime => {
          const updatedSeconds = prevTime.seconds - 1;
          const updatedMinutes = prevTime.minutes - (updatedSeconds < 0 ? 1 : 0);
          const updatedHours = prevTime.hours - (updatedMinutes < 0 ? 1 : 0);
          return {
            hours: updatedHours,
            minutes: updatedMinutes < 0 ? 59 : updatedMinutes,
            seconds: updatedSeconds < 0 ? 59 : updatedSeconds
          };
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countDown]);

  return (
    <div className="bg-green-500/20 h-screen flex flex-col justify-center items-center md:h-[calc(100vh-80px)]">
        <CheckCircle className='text-white bg-green-500 text-[15rem] rounded-full' size={100}/>
        <div className='text-center'>
            <p className='text-green-700 text-2xl'>Payment successfull</p>
            <p className='text-lime-900 text-md'>Your package will arrive in  {countDown.hours}hours {countDown.minutes} and {countDown.seconds} seconds</p>
        </div>
      <Motorcycle />
    </div>
  );
}

export default Success;
