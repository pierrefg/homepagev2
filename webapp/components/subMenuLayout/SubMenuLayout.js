'use client';

import './style.css';
import React, { useState, useEffect } from 'react';
import { usePathname, useParams } from 'next/navigation';
import SimpleLink from '../SimpleLink';

export default function SubMenuLayout({ pagesData }) {
    const pathname = usePathname();
    const params = useParams();

    const [isFullWidth, setIsFullWidth] = useState(false);
    const [hash, setHash] = useState(''); // State to store the hash

    useEffect(() => {
        const currentPage = pagesData.find(contentData => pathname === contentData.link);
        if (currentPage) {
            setIsFullWidth(currentPage.fullWidth || false);
        }
    }, [pathname, pagesData]);

    useEffect(() => {
        setHash(window.location.hash)
    }, [params]);

    useEffect(() => {
        const handleScroll = () => {
            let sections = document.querySelectorAll('.page-section');
            let scrollPosition = window.scrollY + window.innerHeight / 3;

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                // Regular case for all sections except the last one
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    const sectionId = section.getAttribute('id');
                    if (sectionId && `#${sectionId}` !== window.location.hash) {
                        setHash(`#${sectionId}`);
                        history.pushState(null, null, `${pathname}#${sectionId}`);
                    }
                }

                // Special case for the last section when reaching full scroll
                if (
                    window.innerHeight + window.scrollY >= document.body.offsetHeight && 
                    index === sections.length - 1
                ) {
                    const lastSectionId = section.getAttribute('id');
                    if (lastSectionId && `#${lastSectionId}` !== window.location.hash) {
                        setHash(`#${lastSectionId}`);
                        history.pushState(null, null, `${pathname}#${lastSectionId}`);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <div className="sub-menu-layout">
                <div className="sub-menu">
                    {pagesData.map((el, index) => {
                        const isActive = pathname+hash === el.link;
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
