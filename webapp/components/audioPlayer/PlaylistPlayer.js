'use client';

import './style.css';


import { useState, useRef, useEffect } from 'react';

import Image from "next/image";

import AudioPlayer from './AudioPlayer';

export default function PlaylistPlayer({playlist}) {
    const [hasNeverPlayed, setHasNeverPlayed] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

    const goToNextTrack = () => {
        if(selectedTrackIndex<playlist.tracks.length-1) setSelectedTrackIndex(selectedTrackIndex+1)
    };

    const goToPreviousTrack = () => {
        if(selectedTrackIndex>0) setSelectedTrackIndex(selectedTrackIndex-1)
    };

    useEffect(() => {
        if(isPlaying) setHasNeverPlayed(false);
    }, [isPlaying]);

    return (
        <div className='flex flex-col gap-0 w-full max-w-4xl mx-auto'>
            <div className=' w-full max-w-lg mx-auto border-2 px-4 pt-2 pb-4 border-b-0'>
                <div className='pb-4 text-xl text-center'>
                    <h2>{playlist.title}</h2>
                </div>
                <div className='flex flex-row gap-4'>
                    <div>
                        <Image
                            src={playlist.cover}
                            alt={`${playlist.title}-cover`}
                            height={300}
                            className={`transition-all ease-in-out duration-[5s] animate-rotate ${
                                !isPlaying && 'paused'
                            } ${
                                hasNeverPlayed ? 'rounded-none' : 'rounded-full'
                            }`}
                            priority
                        />
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            {
                                playlist.tracks.map(
                                    (track, index) => (
                                        <div 
                                            key={index} 
                                            className={`border-2 pl-4 ${
                                                index==selectedTrackIndex ? 'border-primary-hover' : 'border-hidden'
                                            }`}
                                        >
                                            <stong>{index}</stong> - { track.title }
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <AudioPlayer 
                    title={playlist.tracks[selectedTrackIndex].title}
                    url={playlist.tracks[selectedTrackIndex].url}
                    setIsPlayingParent={setIsPlaying}
                    goToNextTrack={goToNextTrack}
                    goToPreviousTrack={goToPreviousTrack}
                    isMaxTrack = {selectedTrackIndex==playlist.tracks.length-1}
                    isMinTrack = {selectedTrackIndex == 0}
                />
            </div>
            
        </div>
    )
};