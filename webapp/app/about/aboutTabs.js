import { AiOutlineHome } from "react-icons/ai";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { IoSchoolOutline } from "react-icons/io5";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { AiOutlineTool } from "react-icons/ai";

export const aboutTabs = [
    {
        title: <><AiOutlineHome className='inline' /></>,
        link: '/about'
    },
    {
        title: <><AiOutlineTool className='title-icon' /> Expérience</>,
        link: '/about/work'
    },
    {
        title: <><MdOutlineVolunteerActivism className='title-icon' /> Bénévolat</>,
        link: '/about/volunteering'
    },
    {
        title: <><IoSchoolOutline className='title-icon' /> Formation</>,
        link: '/about/education'
    },
    {
        title: <><PiChalkboardTeacherLight className='title-icon' /> Enseignement</>,
        link: '/about/teaching'
    }
];