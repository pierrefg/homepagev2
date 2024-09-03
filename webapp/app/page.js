'use client';

import useStore from '@/store/useStore';

import Portrait from "@/components/Portrait";
import MenuBar from '@/components/menu/MenuButtons';
import SocialIcons from '@/components/SocialIcons'
import Footer from "@/components/Footer";
import Snake from "@/components/snake/Snake";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';

import Link from "next/link";

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import AboutContent from "./AboutContent";
import coverPic from './cover.jpg';

import { FaArrowDown } from "react-icons/fa";

export default function Landing() {
    const { darkMode } = useStore();

    return (
        <>
            <div className={`absolute h-full w-full z-10 pointer-events-none ${!darkMode ? 'opacity-40' : ''}`}>
                <Snake color = "purple" />
                <Snake color = "blue" />
            </div>
            
            <div className="relative h-screen flex flex-col justify-between z-20">
                <div className="flex flex-col gap-2 md:gap-5 justify-center items-center flex-1 my-6">
                    <div className="flex flex-col items-center gap-4 ">
                        <div className="flex w-[150px] md:w-[200px]">
                            <Portrait />
                        </div>
                        <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                            <div className="w-full">
                                <h1 className="text-xl md:text-2xl">Pierre Faure--Giovagnoli</h1>
                            </div>
                            <div className="w-full">
                                <span>
                                    Scientifique des données
                                    <br />
                                    Graphisme, photo, son et vidéo
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='py-4  md:py-8'>
                        <MenuBar />
                    </div>
                    <SocialIcons />
                    <div className='hidden md:block'>
                        <ThemeSwitch />
                    </div>
                </div>
                <div className="flex justify-center mb-8">
                    <Link
                        href='/#about'
                        className='btn btn-primary rounded-full flex justify-center items-center w-[50px] h-[50px] '
                    >
                        <FaArrowDown className='text-2xl rotate-animation' />
                    </Link>
                </div>
            </div>
            <div id='about' className='h-screen flex flex-col justify-between items-center z-20'>
                <div className='flex flex-grow justify-center items-center p-6 z-20'>
                    <HomePageLayout
                        coverPic={coverPic}
                        title='Pierre Faure--Giovagnoli'
                    >
                        <AboutContent />
                    </HomePageLayout>
                </div>
                <Footer />
            </div>
        </>
    ) 
}