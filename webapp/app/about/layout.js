import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { AiOutlineHome } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";

const backgroundContent = [
    {
        title: <span><AiOutlineHome className='inline' /></span>,
        link: '/about'
    },
    {
        title: <span><AiOutlineTool className='inline' /> Expérience</span>,
        link: '/about/work'
    },
    {
        title: <span><MdOutlineVolunteerActivism className='inline' /> Bénévolat</span>,
        link: '/about/volunteering'
    },
    {
        title: <span><IoSchoolOutline className='inline' /> Formation</span>,
        link: '/about/education'
    },
    {
        title: <span><PiChalkboardTeacherLight className='inline' /> Enseignement</span>,
        link: '/about/teaching'
    }
];

export default function AboutLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={backgroundContent}>{children}</SubMenuLayout>
        </>
    );
}

