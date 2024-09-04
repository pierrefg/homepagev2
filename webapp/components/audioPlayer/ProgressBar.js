'use client';

import { useState, useRef, useEffect } from 'react';

export default function ProgressBar({
    playedFraction,
    onSeekStart,
    onSeekEnd,
    onSeekChange,
}) {
    const progressBarRef = useRef(null);
    const [isSeeking, setIsSeeking] = useState(false);

    useEffect(() => {
        const getNewFraction = (event) => {
            const progressBarRect = progressBarRef.current.getBoundingClientRect();
            const moveX = event.clientX - progressBarRect.left;
            const newFraction = Math.max(0, Math.min((moveX / progressBarRect.width), 1));
            return newFraction;
        };

        const handleMouseMove = (event) => {
            if (isSeeking) {
                const newFraction = getNewFraction(event);
                if (onSeekChange) onSeekChange(newFraction);
            }
        };

        const handleMouseUp = (event) => {
            if (isSeeking) {
                const newFraction = getNewFraction(event);
                setIsSeeking(false);
                document.body.classList.remove('no-select');
                if (onSeekEnd) onSeekEnd(newFraction);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isSeeking, playedFraction, onSeekChange, onSeekEnd]);

    const handleMouseDown = () => {
        setIsSeeking(true);
        document.body.classList.add('no-select');
        if (onSeekStart) onSeekStart();
    };

    return (
        <div
            ref={progressBarRef}
            className='absolute top-0 left-0 w-full h-[5px] bg-primary z-10 cursor-pointer'
            onMouseDown={handleMouseDown}
        >
            <div
                className='absolute top-0 left-0 h-[5px] bg-primary-hover z-20'
                style={{
                    width: Math.round(playedFraction * 100) + '%'
                }}
            />
            <div
                className='absolute h-[15px] w-[15px] hover:h-[20px] hover:w-[20px] bg-primary-hover border-2 z-30 cursor-pointer'
                style={{
                    left: Math.round(playedFraction * 100) + '%',
                    transform: 'translate(-50%, -50%)',
                    top: '50%'
                }}
            />
        </div>
    );
}
