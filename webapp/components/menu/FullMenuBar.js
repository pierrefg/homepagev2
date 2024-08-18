"use client";

import Link from "next/link";
import { useState } from 'react';

import Portrait from '../Portrait';
import SocialIcons from '../SocialIcons';
import MenuBar from './MenuBar';

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function FullMenuBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const hideMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full border-b-2 border-b-gray-500 py-4 z-50 bg-black h-[80px]">
            <div className="flex items-center justify-between max-w-6xl mx-auto px-4 ">
                <Link href="/" passHref>
                    <Portrait size={50}/>
                </Link>
                
                {/* Desktop Menu */}
                <div className="hidden md:flex flex-1 justify-center">
                    <MenuBar />
                </div>

                <div className="hidden md:flex items-center">
                    <SocialIcons />
                </div>

                <div className='text-center md:hidden text-1xl'>
                    Pierre FG
                </div>
                

                {/* Hamburger Menu Icon */}
                <button
                    className="md:hidden flex items-center px-3 py-2 text-2xl"
                    onClick={toggleMenu}
                >
                    {
                        menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />
                    }
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 bg-black pt-4 border-b-2 border-b-gray-500">
                    <MenuBar toDoOnElementClick={hideMenu} />
                    <SocialIcons />
                </div>
            )}
        </div>
    );
}
