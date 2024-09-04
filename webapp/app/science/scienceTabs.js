import { AiOutlineHome } from "react-icons/ai";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineDataThresholding } from "react-icons/md";

export const scienceTabs = [
    {
        title: <><AiOutlineHome className='inline' /></>,
        link: '/science',
    },
    {
        title: <><MdOutlineDataThresholding className='title-icon' /> Science des données</>,
        link: '/science/data-science'
    },
    {
        title: <><GiChemicalDrop className='title-icon' /> Recherche</>,
        link: '/science/research'
    },
    {
        title: <><IoDocumentsOutline className='title-icon' /> Publications, séminaires...</>,
        link: '/science/publications'
    },
];