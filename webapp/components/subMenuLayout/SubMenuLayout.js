'use client';

import './style.css';

import React, { useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';

import SimpleLink from '../SimpleLink';

export default function SubMenuLayout({ children, pagesData }) {
    const pathname = usePathname();
    const [isFullWidth, setIsFullWidth] = useState(false);

    useEffect(() => {
        const currentPage = pagesData.find(contentData => pathname === contentData.link);
        if (currentPage) {
            setIsFullWidth(currentPage.fullWidth || false);
        }
    }, [pathname, pagesData]);

    return (
        <>
            <div className="sub-menu-layout">
                <div className="sub-menu">
                    {pagesData.map((el, index) => {
                        const isActive = pathname === el.link;

                        return (
                            <SimpleLink 
                                key={index} 
                                content={el}  
                                active={isActive}
                            />
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