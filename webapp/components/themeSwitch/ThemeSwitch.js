'use client';

import React, { useState, useRef, useEffect } from 'react';
import './style.css';

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function ThemeSwitch({ refreshTheme }) {
    const [isDarkmode, setIsDarkmode] = useState(false);
    const switchToggle = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = JSON.parse(localStorage.getItem('isDarkmode'));
            if (savedTheme !== null) {
                setIsDarkmode(savedTheme);
            }
        }
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkmode', JSON.stringify(isDarkmode));
            refreshTheme(isDarkmode);
        }
    }, [isDarkmode, refreshTheme]);

    const toggleTheme = () => {
        setIsDarkmode(prevMode => !prevMode);
    }

    return (
        <button 
            className="absolute md:top-[20px] md:right-[50px] switch-body"
            onClick={toggleTheme}
        >
            <div
                ref={switchToggle}
                className={`switch-button ${isDarkmode ? 'bg-gray-700 translate-x-3/4' : 'bg-yellow-500 -translate-x-1/4'}`}
            >
                {isDarkmode ? <FaMoon size={24} /> : <MdSunny size={24} />}
            </div>
        </button>
    );
}
