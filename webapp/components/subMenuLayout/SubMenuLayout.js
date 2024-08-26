'use client';

import './style.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenuLayout({ children, pagesData }) {
    const pathname = usePathname();

    return (
        <>
            <div className="sub-menu-layout">
                <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto whitespace-nowrap h-[70px] px-4">
                    {pagesData.map((contentData, index) => {
                        const isActive = pathname === contentData.link;
                        return (
                            <Link
                                key={index}
                                href={contentData.link}
                                className={`btn-secondary ${isActive ? 'active' : ''}`}
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
