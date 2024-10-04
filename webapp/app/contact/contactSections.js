import { MdOutlineDesignServices } from "react-icons/md";

import Services from "./services/services";

export const contactSections = [
    {
        title: <><MdOutlineDesignServices className='title-icon' /> Prestations</>,
        id: 'services',
        link: '/contact#services',
        section: <Services />
    },
];