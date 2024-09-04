'use client';

import './style.css';

import { useState, useEffect } from 'react';

import Image from "next/image";

import AudioPlayer from './AudioPlayer';

export default function PlaylistPlayer({playlist}) {
    const [hasNeverPlayed, setHasNeverPlayed] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);

    const [selectedTrackIndex, setSelectedTrackIndex] = useState(0);

    useEffect(() => {
        if(isPlaying) setHasNeverPlayed(false);
    }, [isPlaying]);

    return (
        <div className='flex flex-col gap-0 w-full max-w-4xl mx-auto items-center justify-center'>
            
            <div className='w-full max-w-lg mx-auto px-4 pt-2 pb-4'>
                
                <div className='flex md:flex-row flex-col gap-4'>
                    <div className={`cursor-pointer z-0 hover:opacity-70 ${isSeeking && 'animate-pulse'}`}>
                        <Image
                            src={playlist.cover}
                            alt={`${playlist.title}-cover`}
                            className={`transition-rounded z-0 w-2/3 md:w-[250px] ease-in-out duration-[5s] animate-rotate mx-auto ${
                                !isPlaying && 'paused'
                            } ${
                                hasNeverPlayed ? 'rounded-none' : 'rounded-full'
                            }`}
                            priority
                        />
                    </div>
                    <div>
                        <div className='pb-4 text-xl text-center'>
                            <h2>{playlist.title}</h2>
                        </div>
                        Perception
                    </div>
                </div>
            </div>

            <div className='w-full md:w-2/3 px-4'>
                <AudioPlayer 
                    title={playlist.tracks[selectedTrackIndex].title}
                    url={playlist.tracks[selectedTrackIndex].url}
                    isMaxTrack = {selectedTrackIndex==playlist.tracks.length-1}
                    isMinTrack = {selectedTrackIndex == 0}
                    onPlayPause = {(playState) => setIsPlaying(playState)}
                    onNext = { () => {
                        if(selectedTrackIndex<playlist.tracks.length-1) setSelectedTrackIndex(selectedTrackIndex+1)
                    } }
                    onPrevious = { () => {
                        if(selectedTrackIndex>0) setSelectedTrackIndex(selectedTrackIndex-1)
                    } }
                    onSeek = {(seekingState) => setIsSeeking(seekingState)}
                />
            </div>

            <div className='flex flex-col gap-2 mx-auto border-2 p-6 border-t-0'>
                {
                    playlist.tracks.map(
                        (track, index) => (
                            <div key={index}>
                                <button
                                    onClick={() => setSelectedTrackIndex(index)}
                                    className={`btn text-left ${index==selectedTrackIndex && 'active text-primary bg-primary-hover'}`}
                                >
                                    {index} - { track.title }
                                </button>
                            </div>
                        )
                    )
                }
            </div>
            
        </div>
    )
};