"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";

import { workExperiences, volunteeringExperiences, educationExperiences, teachingExperiences } from './data';

import Timeline from "./timeline";

// Declare all_timelines as a constant
const all_timelines = [
    {
        icon: AiOutlineTool,
        data: workExperiences,
        title: 'Expérience',
        anchor: 'experience'
    },
    {
        icon: MdOutlineVolunteerActivism,
        data: volunteeringExperiences,
        title: 'Bénévolat',
        anchor: 'volunteering'
    },
    {
        icon: IoSchoolOutline,
        data: educationExperiences,
        title: 'Formation',
        anchor: 'education'
    },
    {
        icon: PiChalkboardTeacherLight,
        data: teachingExperiences,
        title: 'Enseignement',
        anchor: 'teaching'
    }
];

export default function Background() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [activeTimeline, setActiveTimeline] = useState('experience');

    useEffect(() => {
        const hash = searchParams.get('section');
        const matchedTimeline = all_timelines.find(timeline => timeline.anchor === hash);
        if (matchedTimeline) {
            setActiveTimeline(matchedTimeline.title);
        }
    }, [searchParams]);

    const handleClick = (title, anchor) => {
        setActiveTimeline(title);
        router.replace(`${pathname}?section=${anchor}`, undefined, { shallow: true });
    };

    return (
        <>
            <div className="flex fixed left-0 top-[80px] z-51 w-full justify-center items-center bg-black h-[70px] md:h-[90px]">
                <div className="flex flex-row items-center gap-4 overflow-x-auto whitespace-nowrap h-[50px] px-4">
                    {all_timelines.map((timelineData, index) => {
                        const isActive = activeTimeline === timelineData.title;
                        const IconComponent = timelineData.icon;
                        return (
                            <button
                                key={index}
                                className={`btn-white-secondary ${isActive ? 'active' : ''}`}
                                onClick={() => handleClick(timelineData.title, timelineData.anchor)}
                            >
                                <IconComponent className="text-base inline" />
                                <span> {timelineData.title}</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            
            <div className="flex flex-col gap-4 text-sm md:text-base px-6 mt-[70px]">
                {all_timelines.map((timelineData, index) => {
                    if (timelineData.title === activeTimeline) {
                        return (
                            <div key={index} className='flex mt-6 w-full'>
                                <Timeline
                                    key={index}
                                    Icon={timelineData.icon}
                                    title={timelineData.title}
                                    data={timelineData.data}
                                />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </>
    );
}