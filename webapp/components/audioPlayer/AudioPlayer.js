'use client';

import { useState, useRef, useEffect } from 'react';

import { FaPlay, FaPause } from "react-icons/fa6";
import { MdOutlineSkipPrevious, MdOutlineSkipNext } from "react-icons/md";

import ProgressBar from './ProgressBar';

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
    const [isPlayable, setIsPlayable] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(null);
    const [isSeeking, setIsSeeking] = useState(false);

    const audioRef = useRef(null);

    useEffect(() => {
        setIsPlayable(false);
        setIsPlaying(false);
        setIsSeeking(false);
        setCurrentTime(0);
        setDuration(0);
    }, [url]);

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
        if (!isSeeking) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    return (
        <div className='w-full relative'>
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate}
                src={url}
                onDurationChange={() => {setDuration(audioRef.current.duration)}}
                onCanPlay={() => {setIsPlayable(true)}}
            />
            <ProgressBar 
                playedFraction={currentTime/duration} 
                onSeekStart={() => setIsSeeking(true)} 
                onSeekEnd={(playedFraction) => {
                    var newTime =  playedFraction*duration;
                    setCurrentTime(newTime);
                    audioRef.current.currentTime = newTime;
                }}
                onSeekChange={(playedFraction) => {
                    var newTime =  playedFraction*duration;
                    setCurrentTime(newTime);
                }}
            />
            <div className="w-full h-[60px] items-center border-2 bt-0 flex flex-row gap-6 px-6 py-4">
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
                            className={`btn btn-primary w-[30px] h-[30px] ${!isPlayable && 'disabled'}`}
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
