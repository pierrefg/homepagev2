'use client';

import './style.css';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import SubMenu from './SubMenu';

export default function SubMenuLayout({ pagesData, noMenu=false }) {
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
            {
                noMenu ?
                <div className='h-[20px]' />
                :
                <SubMenu pagesData={pagesData} />
            }
            
            <div className={`sub-menu-content ${!isFullWidth && 'max-w-7xl md:px-0 px-4 mx-auto'}`}>
                <div className='flex flex-col gap-6'>
                    {
                        pagesData.map(
                            (el, index) => (
                                <div key={index} id={el.id} className='page-section'>
                                    {
                                        !el.noTitle && 
                                        <div className="flex flex-col text-center mb-6 items-center justify-center">
                                            <div>
                                                <h1 className="">
                                                    {el.title}
                                                </h1>
                                                <div className='bg-primary-hover mt-2 w-[50px] h-[5px]' />
                                            </div>
                                        </div>
                                    }
                                    {el.section}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </>
    );
}
