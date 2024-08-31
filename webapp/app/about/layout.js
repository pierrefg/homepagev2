import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { RiInformation2Line } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const aboutContent = [
    {
        title: <span><RiInformation2Line className='inline' /> Qui suis-je ?</span>,
        link: '/about/who-am-i'
    },
    {
        title: <span><MdOutlineDesignServices className='inline' /> Prestations</span>,
        link: '/about/services'
    },
    {
        title: <span><GrContact className='inline' /> Contact</span>,
        link: '/about/contact'
    },
];

export default function AboutLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={aboutContent}>{children}</SubMenuLayout>
        </>
    );
}

