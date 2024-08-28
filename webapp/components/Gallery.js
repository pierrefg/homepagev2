'use client';

import React, { useState } from 'react';
import Image from "next/image";

export default function MyGallery({images}) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleWheel = (e) => {
        const gallery = e.currentTarget;
        gallery.scrollLeft += e.deltaY;
        setScrollPosition(gallery.scrollLeft);
    };

    return (
        <div
            onWheel={handleWheel}
            className="flex gap-8 overflow-x-scroll whitespace-nowrap scroll-smooth touch-pan-x my-[30px] max-w-7xl"
            style={{
                WebkitOverflowScrolling: 'touch',
            }}
        >
            {images.map(
                (image, index) => (
                    <div
                        key={index}
                        className='shrink-0 mx-0'
                        style={{
                            minWidth: '300px',
                            height: image.height+'px'
                        }}
                    >
                        <Image
                            src={image.path}
                            alt={`Image ${index + 1}`}
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                )
            )}
        </div>
    );
}
