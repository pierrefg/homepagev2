'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const backgroundContent = [
    {
        title: 'Expérience',
        link: '/background/work'
    },
    {
        title: 'Bénévolat',
        link: '/background/volunteering'
    },
    {
        title: 'Formation',
        link: '/background/education'
    },
    {
        title: 'Enseignement',
        link: '/background/teaching'
    }
];

export default function Background({ children }) {
    const pathname = usePathname();

    return (
        <>
            <div className="flex fixed left-0 top-[80px] z-51 w-full justify-center items-center bg-black h-[70px] md:h-[90px]">
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
            
            <div className="flex text-sm md:text-base px-6 mt-[70px]">
                {children}
            </div>
        </>
    );
}

