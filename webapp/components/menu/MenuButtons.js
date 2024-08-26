"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaRunning } from "react-icons/fa";
import { BiPaintRoll } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";

const menuLinks = [
    [<span><FaRunning className='icon' /> Mon parcours</span>, '/background'],
    [<span><AiOutlineExperiment className='icon' /> Informatique & Recherche</span>, '/science'],
    [<span><BiPaintRoll className='icon'/> Activité artistique</span>, '/art'],
]; 

export default function MenuButtons({ toDoOnElementClick }) {
    const pathname = usePathname();
    
    return (
        <div className={`flex flex-col md:flex-row items-center gap-4`}>
            {
                menuLinks.map(
                    ([title, link], index) => {
                        const isActive = pathname.includes(link);
                        
                        return (
                            <Link 
                                key={index} 
                                href={link}
                                className={`btn-primary ${isActive ? 'active' : ''}`}
                                onClick={ toDoOnElementClick }
                            >
                                {title}
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}