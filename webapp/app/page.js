'use client';

import useStore from '@/store/useStore';

import Portrait from "@/components/Portrait";
import MenuBar from '@/components/menu/MenuButtons';
import SocialIcons from '@/components/SocialIcons'
import Copyright from "@/components/Copyright";
import Snake from "@/components/snake/Snake";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';

export default function Landing() {
    const { darkMode } = useStore();

    return (
        <>
            {/* <div className='z-50 md:block absolute top-[40px] right-[50px]'>  
                <ThemeSwitch />
            </div> */}
            <div className={`absolute inset-0 z-10 pointer-events-none ${!darkMode ? 'opacity-40' : ''}`}>
                <Snake color = "purple" />
                <Snake color = "blue" />
            </div>
            <div className="relative h-screen flex flex-col justify-between z-20">
                <div className="flex flex-col gap-5 justify-center items-center flex-grow my-6">
                    <div className="flex flex-col items-center gap-4 ">
                        <div className="flex">
                            <Portrait />
                        </div>
                        <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                            <div className="w-full">
                                <h1 className="text-2xl">Pierre Faure--Giovagnoli</h1>
                            </div>
                            <div className="w-full">
                                <span>
                                    <a 
                                        href="mailto: contact@pierrefg.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        contact@pierrefg.com 
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='py-8'>
                        <MenuBar />
                    </div>
                    <SocialIcons />
                    <ThemeSwitch />
                </div>
                <Copyright />
            </div>
        </>
    ) 
}