import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

const artContent = [
    {
        title: <span><MdOutlinePolyline className='inline' /> Graphisme</span>,
        link: '/art/graphics'
    },
    {
        title: <span><MdOutlinePhotoCamera className='inline' /> Photographie</span>,
        link: '/art/photography'
    },
    {
        title: <span><IoMusicalNoteOutline className='inline' /> Musique</span>,
        link: '/art/music'
    },
    {
        title: <span><RiVideoOnLine className='inline' /> Vidéo</span>,
        link: '/art/video'
    },
];

export default function ArtLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={artContent}>{children}</SubMenuLayout>
        </>
    );
}

