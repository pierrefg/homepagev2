import { AiOutlineHome } from "react-icons/ai";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

export const artTabs = [
    {
        title: <><AiOutlineHome className='inline' /></>,
        link: '/art'
    },
    {
        title: <><MdOutlinePolyline className='title-icon' /> Graphisme</>,
        link: '/art/graphics',
        fullWidth: true
    },
    {
        title: <><MdOutlinePhotoCamera className='title-icon' /> Photographie</>,
        link: '/art/photography',
        fullWidth: true
    },
    {
        title: <><IoMusicalNoteOutline className='title-icon' /> Musique</>,
        link: '/art/music',
        fullWidth: true
    },
    {
        title: <><RiVideoOnLine className='title-icon' /> Vidéo</>,
        link: '/art/video'
    },
];