import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

export const contactTabs = [
    {
        title: <><AiOutlineHome className='inline' /></>,
        link: '/contact'
    },
    {
        title: <><MdOutlineDesignServices className='title-icon' /> Prestations</>,
        link: '/contact/services'
    },
];