import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

export const contactTabs = [
    {
        title: <span><AiOutlineHome className='inline' /></span>,
        link: '/contact'
    },
    {
        title: <span><MdOutlineDesignServices className='inline' /> Prestations</span>,
        link: '/contact/services'
    },
];