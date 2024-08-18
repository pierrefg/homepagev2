"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuBar({ toDoOnElementClick }) {
    const pathname = usePathname();

    var links = [
        ['Mon parcours', '/background'],
        ['Graphisme', '/graphics'],
        ['Photographie', '/photography'],
        ['Musique', '/music'],
        ['Vidéo', '/video'],
    ]; 

    return (
        <div className={`flex flex-col md:flex-row items-center gap-6`}>
            {
                links.map(
                    ([title, link], index) => {
                        const isActive = pathname === link;
                        
                        return (
                            <Link key={index} href={link}>
                                <button 
                                    key={index} 
                                    className={`btn-white-primary ${isActive ? 'active' : ''}   `}
                                    onClick={ toDoOnElementClick }
                                >                                    
                                    {title}
                                </button>
                            </Link>
                        )
                    }
                )
            }
        </div>
    )
}