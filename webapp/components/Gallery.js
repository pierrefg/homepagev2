'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function Gallery({ galleryData }) {
    const galleryLength = galleryData.imgs.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidths, setImageWidths] = useState([]);
    const [isScrollable, setIsScrollable] = useState(false);

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

    return (
        <div className='flex flex-col gap-2'>
            <h2 
                className="inline-block p-2 text-base text-center"
                style={{ display: 'inline-block', width: 'auto' }}
            >
                {galleryData.title}
            </h2>
            <div className="flex flex-row items-center gap-4">
                <div className='w-[40px] hidden md:block'>
                    <MdNavigateBefore 
                        className={`w-[40px] text-4xl btn-secondary ${currentIndex==0 && 'disabled'}`} 
                        onClick={handlePrevClick}
                    />
                </div>
                <div 
                    className='flex flex-row gap-[20px] mx-auto overflow-x-scroll scroll-smooth snap-x snap-mandatory md:snap-none'
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
                                    className='shrink-0 snap-center pb-4 flex justify-center md:justify-normal w-full md:w-auto'
                                >
                                    <Image
                                        id={galleryData.title+'_'+index}
                                        src={el.img}
                                        alt={`Image ${index + 1}`}
                                        height={400}
                                        onLoad={(e) => handleImageLoad(index, e)}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
                <div className='w-[40px] hidden md:block'>
                    <MdNavigateNext 
                        className={`text-4xl btn-secondary ${currentIndex==galleryLength-1 && 'disabled'}`} 
                        onClick={handleNextClick}
                    />
                </div>
            </div>
        </div>
    );
    
}
