"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { BiGame } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";

const menuLinks = [
    [<span><BiGame className='icon' /> Qui suis-je ?</span>, '/about'],
    [<span><AiOutlineExperiment className='icon' /> Informatique</span>, '/science'],
    [<span><LuPaintbrush className='icon'/> Porfolio artistique</span>, '/art'],
    [<span><RiQuestionAnswerLine className='icon'/> Contact</span>, '/contact'],
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