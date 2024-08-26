'use client';

import './style.css';

import useStore from '@/store/useStore';

import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

export default function ThemeSwitch() {
    const { darkMode, switchTheme } = useStore();

    const toggleTheme = () => {
        switchTheme();
    }

    return (
        <button 
            className={ `switch-body ${darkMode ? 'bg-white' : 'bg-black'}` }
            onClick={toggleTheme}
        >
            <div
                className={`switch-button ${darkMode ? 'bg-gray-700 translate-x-3/4' : 'bg-yellow-500 -translate-x-1/4'}`}
            >
                {darkMode ? <FaMoon size={24} /> : <MdSunny size={24} />}
            </div>
        </button>
    );
}
