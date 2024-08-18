"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaRunning } from "react-icons/fa";
import { BiPaintRoll } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";

export default function MenuBar({ toDoOnElementClick }) {
    const pathname = usePathname();

    var links = [
        [<span><FaRunning className='icon' /> Mon parcours</span>, '/background'],
        [<span><AiOutlineExperiment className='icon' /> Informatique & Recherche</span>, '/science'],
        [<span><BiPaintRoll className='icon'/> Activités artistiques</span>, '/art'],
    ]; 

    return (
        <div className={`flex flex-col md:flex-row items-center gap-4`}>
            {
                links.map(
                    ([title, link], index) => {
                        const isActive = pathname.includes(link);
                        
                        return (
                            <Link 
                                key={index} 
                                href={link}
                                className={`btn-white-primary ${isActive ? 'active' : ''}`}
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