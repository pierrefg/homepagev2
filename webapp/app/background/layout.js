import SubLayout from '@/components/SubLayout';

import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";

const backgroundContent = [
    {
        title: <span><AiOutlineTool className='inline' /> Expérience</span>,
        link: '/background/work'
    },
    {
        title: <span><MdOutlineVolunteerActivism className='inline' /> Bénévolat</span>,
        link: '/background/volunteering'
    },
    {
        title: <span><IoSchoolOutline className='inline' /> Formation</span>,
        link: '/background/education'
    },
    {
        title: <span><PiChalkboardTeacherLight className='inline' /> Enseignement</span>,
        link: '/background/teaching'
    }
];

export default function BackgroundLayout({ children }) {
    return (
        <>
            <SubLayout pagesData={backgroundContent}>{children}</SubLayout>
        </>
    );
}

