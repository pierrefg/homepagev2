'use client';

import './style.css';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SubMenuLayout({ children, pagesData }) {
    const pathname = usePathname();
    const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const currentPage = pagesData.find(contentData => pathname === contentData.link);
        if (currentPage) {
            setIsFullWidth('fullWidth' in currentPage && currentPage.fullWidth);
        }
    }, [pathname, pagesData]);

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
            
            <div className={`sub-menu-content ${!isFullWidth && 'max-w-7xl px-4 mx-auto'}`}>
                {children}
            </div>
        </>
    );
}