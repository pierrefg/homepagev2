import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";

import { workExperiences, volunteeringExperiences } from './data';

export default function Background() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex grid grid-cols-7 gap-4">
                <div className="col-span-2 text-white p-4 flex items-center justify-end border-r border-r-2 border-white">
                    <IoSchoolOutline className="text-2xl mr-2" />
                    Education
                </div>
                <div className="col-span-5 text-white">
                    <ul>
                        {workExperiences.map((experience, index) => (
                            <li key={index} className="mt-4">
                                <div className="flex grid grid-cols-8">
                                    <div className="col-span-2">
                                        { experience.period }<br/>
                                        { experience.type && experience.type }
                                    </div>
                                    <div className="col-span-6">
                                        <strong>{experience.title}</strong><br/>
                                        { experience.company }<br />
                                        <i>{experience.description}</i>
                                        {experience.link && (
                                            <span> <a href={experience.link.url} target="_blank" rel="noopener noreferrer">here</a></span>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex grid grid-cols-7 gap-4">
                <div className="col-span-2 text-white p-4 flex items-center justify-end border-r border-r-2 border-white">
                    <MdOutlineVolunteerActivism className="text-2xl mr-2" />
                    Volunteering
                </div>
                <div className="col-span-5 text-white">
                    <ul>
                        {volunteeringExperiences.map((experience, index) => (
                            <li key={index}>
                                <strong>{experience.organization}</strong> | <i>{experience.period}</i>
                                <br />
                                {experience.description}
                                <br /><i>{experience.role}</i>
                                {experience.link && (
                                    <span> <a href={experience.link.url} target="_blank" rel="noopener noreferrer">{experience.link.text}</a></span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
