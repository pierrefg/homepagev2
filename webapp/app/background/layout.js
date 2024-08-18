'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";

const backgroundContent = [
    {
        title: <span><AiOutlineTool className='inline' /> Expérience</span>,
        link: '/background/work'
    },
    {
        title: <span><MdOutlineVolunteerActivism className='inline' /> Bénévolat</span>,
        link: '/background/volunteering'
    },
    {
        title: <span><IoSchoolOutline className='inline' /> Formation</span>,
        link: '/background/education'
    },
    {
        title: <span><PiChalkboardTeacherLight className='inline' /> Enseignement</span>,
        link: '/background/teaching'
    }
];

export default function Background({ children }) {
    const pathname = usePathname();

    return (
        <>
            <div className="flex fixed left-0 top-[75px] z-51 w-full justify-center items-center bg-black h-[70px] md:h-[90px]">
                <div className="flex flex-row items-center gap-4 overflow-x-auto whitespace-nowrap h-[50px] px-4">
                    {backgroundContent.map((contentData, index) => {
                        const isActive = pathname === contentData.link;
                        return (
                            <Link
                                key={index}
                                href={contentData.link}
                                className={`btn-white-secondary ${isActive ? 'active' : ''}`}
                            >
                                {contentData.title}
                            </Link>
                        );
                    })}
                </div>
            </div>
            
            <div className="flex text-sm md:text-base px-6 mt-[70px] md:mt-[90px]">
                {children}
            </div>
        </>
    );
}

