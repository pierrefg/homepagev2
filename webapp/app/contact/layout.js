import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";

const aboutContent = [
    {
        title: <span><AiOutlineHome className='inline' /></span>,
        link: '/contact'
    },
    {
        title: <span><MdOutlineDesignServices className='inline' /> Prestations</span>,
        link: '/contact/services'
    },
];

export default function ContactLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={aboutContent}>{children}</SubMenuLayout>
        </>
    );
}

