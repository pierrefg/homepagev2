'use client';

import { useState, useRef, useEffect } from 'react';

import { FaPlay, FaPause } from "react-icons/fa6";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";

const splitSecs = (duration) => {
    const mins = Math.floor(duration / 60);
    const secs = Math.round(duration % 60);
    return [mins, secs];
}

const formatTime = (nSeconds) => splitSecs(nSeconds).map(num => num.toString().padStart(2, '0')).join(':');

export default function AudioPlayer(
    { 
        title, 
        url, 
        setIsPlayingParent,
        goToPreviousTrack,
        goToNextTrack,
        isMinTrack,
        isMaxTrack
    }
) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(null);
    const [isDragging, setIsDragging] = useState(false);

    const audioRef = useRef(null);
    const progressBarRef = useRef(null);


    useEffect(() => {
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
    }, [url]);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isDragging) {
                const progressBarRect = progressBarRef.current.getBoundingClientRect();
                const moveX = event.clientX - progressBarRect.left;
                const newTime = Math.max(0, Math.min((moveX / progressBarRect.width) * duration, duration));
                setCurrentTime(newTime);
            }
        };

        const handleMouseUp = (event) => {
            if (isDragging) {
                const progressBarRect = progressBarRef.current.getBoundingClientRect();
                const clickX = event.clientX - progressBarRect.left;
                const newTime = (clickX / progressBarRect.width) * duration;
                audioRef.current.currentTime = newTime;
                setCurrentTime(newTime);
                setIsDragging(false);
                document.body.classList.remove('no-select');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, duration]);

    const togglePlayPause = () => {
        if (!duration) setDuration(audioRef.current.duration);
        
        if (isPlaying) {
            setIsPlayingParent(false);
            audioRef.current.pause();
        } else {
            setIsPlayingParent(true);
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (!isDragging) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleMouseDown = () => {
        setIsDragging(true);
        document.body.classList.add('no-select');
    };

    return (
        <div className='w-full relative'>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                src={url}
            />
            <div
                ref={progressBarRef}
                className='absolute top-0 left-0 w-full h-[5px] bg-primary z-10 cursor-pointer'
                onMouseDown={handleMouseDown}
            >
                <div
                    className='absolute top-0 left-0 h-[5px] bg-primary-hover z-20'
                    style={{
                        width: Math.round((currentTime / duration) * 100) + '%'
                    }}
                />
                <div
                    className='absolute h-[15px] w-[15px] hover:h-[20px] hover:w-[20px] bg-primary-hover border-2 z-30 cursor-pointer'
                    style={{
                        left: Math.round((currentTime / duration) * 100) + '%',
                        transform: 'translate(-50%, -50%)',
                        top: '50%'
                    }}
                    
                />
            </div>
            <div className="w-full h-[60px] items-center border-2 flex flex-row gap-6 px-6 py-4">
                <div className='w-[200px]'>
                    { title }
                </div>
                
                <div className='flex flex-1'>
                    <div className='flex flex-row gap-4 mx-auto'>
                        <button
                            onClick={goToPreviousTrack}
                            className={`btn btn-secondary btn-tight w-[30px] h-[30px] ${isMinTrack && 'disabled'}`}
                        >
                            <MdOutlineSkipPrevious className='inline text-2xl' />
                        </button>
                        
                        <button
                            onClick={togglePlayPause}
                            className="btn btn-primary w-[30px] h-[30px]"
                        >
                            {
                                isPlaying ?
                                    <FaPause className='inline' /> :
                                    <FaPlay className='inline' />
                            }
                        </button>
                        <button
                            onClick={goToNextTrack}
                            className={`btn btn-secondary btn-tight w-[30px] h-[30px] ${isMaxTrack && 'disabled'}`}
                        >
                            <MdOutlineSkipNext className='text-2xl'/>
                        </button>
                    </div>
                </div>

                <div className='w-[200px] text-right'>
                    {formatTime(currentTime)} / {formatTime(duration)}
                </div>
            </div>
        </div>
    );
}
