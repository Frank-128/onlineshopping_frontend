"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const LoadingPage = () => {
    const divRef = useRef([]);

    useEffect(() => {
        gsap.set(divRef.current, { display: 'flex', flexDirection: 'row', justifyContent: 'center' });

        const colors = ['indigo', 'purple', 'blue'];

        const timeline = gsap.timeline({ repeat: -1 });

        colors.forEach((color, index) => {
            timeline.to(divRef.current[index], {
                backgroundColor: color,
                y: -10,
                duration: 0.4,
                onComplete: () => gsap.to(divRef.current[index], { y: 0, duration: 0.4 }),
            }, index * 0.3); // Stagger start time
        });

    }, []);

    return (
        <div className={'absolute top-0 left-0 z-[9999] w-screen h-screen items-center justify-center bg-black/20 flex'}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className={'text-4xl font-bold text-gray-600'}>Loading</div>
                <div ref={(el) => (divRef.current[0] = el)} style={styles.box}></div>
                <div ref={(el) => (divRef.current[1] = el)} style={styles.box}></div>
                <div ref={(el) => (divRef.current[2] = el)} style={styles.box}></div>


            </div>
        </div>
    );
};

const styles = {
    box: {
        width: '20px',
        height: '20px',
        margin: '10px',
        borderRadius:20,
        backgroundColor: 'lightgray',
    },
};

export default LoadingPage;
