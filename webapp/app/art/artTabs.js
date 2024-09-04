import { AiOutlineHome } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

export const artTabs = [
    {
        title: <span><AiOutlineHome className='inline' /></span>,
        link: '/art'
    },
    {
        title: <span><MdOutlinePolyline className='inline' /> Graphisme</span>,
        link: '/art/graphics',
        fullWidth: true
    },
    {
        title: <span><MdOutlinePhotoCamera className='inline' /> Photographie</span>,
        link: '/art/photography',
        fullWidth: true
    },
    {
        title: <span><IoMusicalNoteOutline className='inline' /> Musique</span>,
        link: '/art/music',
        fullWidth: true
    },
    {
        title: <span><RiVideoOnLine className='inline' /> Vidéo</span>,
        link: '/art/video'
    },
];