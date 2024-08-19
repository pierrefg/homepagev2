'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function SubLayout({ children, pagesData }) {
    const pathname = usePathname();

    return (
        <>
            <div className="flex fixed left-0 top-[75px] z-51 w-full justify-center items-center bg-black h-[70px] md:h-[90px]">
                <div className="flex flex-row items-center gap-4 overflow-x-auto whitespace-nowrap h-[50px] px-4">
                    {pagesData.map((contentData, index) => {
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
            
            <div className="flex text-sm w-full justify-center md:text-base px-6 mt-[50px] md:mt-[90px]">
                {children}
            </div>
        </>
    );
}

