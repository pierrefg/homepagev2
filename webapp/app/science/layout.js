import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { IoDocumentsOutline } from "react-icons/io5";
import { GiChemicalDrop } from "react-icons/gi";
import { MdOutlineDataThresholding } from "react-icons/md";

const scienceContent = [
    {
        title: <span><GiChemicalDrop className='inline' /> Recherche</span>,
        link: '/science/research'
    },
    {
        title: <span><MdOutlineDataThresholding className='inline' /> Science des données</span>,
        link: '/science/data-science'
    },
    {
        title: <span><IoDocumentsOutline className='inline' /> Publications, séminaires...</span>,
        link: '/science/publications'
    },
];

export default function ScienceLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={scienceContent}>{children}</SubMenuLayout>
        </>
    );
}

