'use client';

import { useEffect, useRef, useState } from 'react';
import useStore from '@/store/useStore';
import Image from "next/image";

export default function Portrait({ size = 220 }) {
    const { darkMode } = useStore();
    const portraitRef = useRef(null);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        if (!hasMounted) {
            setHasMounted(true);
            return; // Prevent animation on the initial load
        }

        const element = portraitRef.current;

        if (element) {
            // Determine rotation direction based on darkMode
            const rotation = darkMode ? 'rotate(360deg)' : 'rotate(-360deg)';

            // Reset animation by removing and then re-adding the class
            element.style.transition = 'none';
            element.style.transform = 'none';
            element.offsetHeight; // Trigger a reflow to reset

            // Apply the new rotation with animation
            element.style.transition = 'transform 2s ease-in-out';
            element.style.transform = rotation;
        }
    }, [darkMode]);

    return (
        <Image
            src="/imgs/portrait.jpg"
            alt="pierrefg"
            width={size}
            height={size}
            className="rounded-full portrait-comp hover:animate-pulse"
            priority
            ref={portraitRef}
        />
    );
}
