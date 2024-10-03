import { IoArrowUpSharp  } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

import ContactHeader from "./header/contactHeader";
import Services from "./services/services";

export const contactSections = [
    {
        title: <><IoArrowUpSharp className='inline' /></>,
        noTitle: true,
        id: 'header',
        link: '/contact#header',
        section: <ContactHeader />
    },
    {
        title: <><MdOutlineDesignServices className='title-icon' /> Prestations</>,
        id: 'services',
        link: '/contact#services',
        section: <Services />
    },
];