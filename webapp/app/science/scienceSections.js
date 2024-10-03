import { IoArrowUpSharp  } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineDataThresholding } from "react-icons/md";

import ScienceHeader from "./header/scienceHeader";
import DataScience from "./data-science/dataScience";
import Research from "./research/page";
import Publications from "./publications/publications";

export const scienceSections = [
    {
        title: <><IoArrowUpSharp className='inline' /></>,
        noTitle: true,
        id: 'header',
        link: '/science#header',
        section: <ScienceHeader />

    },
    {
        title: <><MdOutlineDataThresholding className='title-icon' /> Science des données</>,
        id: 'data-science',
        link: '/science#data-science',
        section: <DataScience />
    },
    {
        title: <><GiChemicalDrop className='title-icon' /> Recherche</>,
        id: 'research',
        link: '/science#research',
        section: <Research />
    },
    {
        title: <><IoDocumentsOutline className='title-icon' /> Publications, séminaires...</>,
        id: 'publications',
        link: '/science#publications',
        section: <Publications />
    },
];