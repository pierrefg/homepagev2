'use client';

import React, { useState, useEffect, useRef } from 'react';

import LandingTop from './content/LandingTop';
import About from './content/About';

export default function Landing() {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="relative h-screen flex flex-col justify-between mb-[20px]">
                <LandingTop />
            </div>
            <div 
                ref={domRef}
                id='about' 
                className={`h-screen flex flex-col justify-between items-center transition-all duration-1000 ease-in-out transform ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                }`} 
            >
                <About />
            </div>
        </>
    ) 
}