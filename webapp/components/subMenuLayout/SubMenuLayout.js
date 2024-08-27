'use client';

import './style.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenuLayout({ children, pagesData }) {
    const pathname = usePathname();

    return (
        <>
            <div className="sub-menu-layout">
                <div className="sub-menu">
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
            
            <div className="sub-menu-content">
                {children}
            </div>
        </>
    );
}
