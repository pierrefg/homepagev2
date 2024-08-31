"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaRunning } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";

const menuLinks = [
    [<span><FaRunning className='icon' /> Parcours</span>, '/background'],
    [<span><AiOutlineExperiment className='icon' /> Science</span>, '/science'],
    [<span><LuPaintbrush className='icon'/> Art</span>, '/art'],
    [<span><RiQuestionAnswerLine className='icon'/> En savoir plus</span>, '/about'],
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