'use client';

import './style.css';

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Overlay from '@/components/overlay/Overlay';

import Loader from '../loader/Loader';

export default function Gallery({ galleryData }) {
    const galleryLength = galleryData.imgs.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidths, setImageWidths] = useState([]);
    const [isScrollable, setIsScrollable] = useState(false);
    const lightTheme = (galleryData.theme || 'dark') == 'light';

    const [toShowInOverlay, setToShowInOverlay] = useState(null);

    const imageContainerRef = useRef(null);

    useEffect(() => {
        if (imageContainerRef.current) {
            setIsScrollable(imageContainerRef.current.scrollWidth > imageContainerRef.current.clientWidth);
        }
    }, [imageWidths]);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            const newIndex = currentIndex - 1;
            setCurrentIndex(newIndex);
            scrollToImage(newIndex);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < galleryLength - 1) {
            const newIndex = currentIndex + 1;
            setCurrentIndex(newIndex);
            scrollToImage(newIndex);
        }
    };

    const scrollToImage = (index) => {
        if (imageContainerRef.current && imageWidths[index]) {
            const containerWidth = imageContainerRef.current.clientWidth;
            const imageWidth = imageWidths[index];
            
            const scrollLeft = imageWidths.slice(0, index).reduce((acc, width) => acc + width + 20, 0)
                - (containerWidth / 2) + (imageWidth / 2);
    
            imageContainerRef.current.scrollLeft = scrollLeft;
        }
    };

    const handleImageLoad = (index, event) => {
        const { width } = event.target;
        setImageWidths((prevWidths) => {
            const newWidths = [...prevWidths];
            newWidths[index] = width;
            return newWidths;
        });
    };

    

    return (<>
        {
            toShowInOverlay &&
            <Overlay onClose={() => setToShowInOverlay(null)}>{toShowInOverlay}</Overlay>
        }
        {/* <div className={`gallery ${lightTheme ? 'gallery-light' : 'gallery-dark' }`}> */}
        <div className="gallery">
            <div className="inline-block flex flex-col p-2 text-base text-center">
                <h2 
                    className="inline-block"
                >
                    {galleryData.title}
                </h2>
                <p className="inline-block text-sm text-primary-muted">
                    {galleryData.place} {galleryData.date && <>[{galleryData.date}]</>}
                </p>
            </div>
            <div className="flex flex-row items-center gap-4 max-w-7xl mx-auto">
                <div className='w-[40px] hidden md:block'>
                    {
                        isScrollable &&
                        <MdNavigateBefore 
                            className={`w-[40px] text-4xl btn-secondary ${currentIndex==0 && 'disabled'}`} 
                            onClick={handlePrevClick}
                        />
                    }
                </div>
                <div 
                    className='img-carrousel'
                    style={{
                        WebkitOverflowScrolling: 'touch',
                    }}
                    ref={imageContainerRef}
                >
                    {
                        galleryData.imgs.map(
                            (el, index) => (
                                <div 
                                    key={index} 
                                    className='img-div cursor-pointer'
                                    onClick={
                                        () => setToShowInOverlay(
                                        <Image 
                                            src={el.img}
                                            alt={`Image ${index + 1} full size`}
                                            height={800}
                                            onLoad={(e) => handleImageLoad(index, e)}
                                        />
                                    )}
                                >
                                    <Image
                                        src={el.img}
                                        alt={`Image ${index + 1}`}
                                        placeholder={'blur'}
                                        height={400}
                                        style={{objectFit: "contain"}}
                                        onLoad={(e) => handleImageLoad(index, e)}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
                <div className='w-[40px] hidden md:block'>
                    {
                        isScrollable &&
                        <MdNavigateNext 
                            className={`text-4xl btn-secondary ${currentIndex==galleryLength-1 && 'disabled'}`} 
                            onClick={handleNextClick}
                        />
                    }
                </div>
            </div>
        </div>
    </>);
    
}
