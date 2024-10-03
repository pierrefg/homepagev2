import { IoArrowUpSharp  } from "react-icons/io5";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

import ArtHeader from "./header/artHeader";
import Graphics from "./graphics/graphics";
import Photography from "./photography/photography";
import Music from "./music/music";
import Video from "./video/video";

export const artSections = [
    {
        title: <><IoArrowUpSharp className='inline' /></>,
        noTitle: true,
        id: 'header',
        link: '/art#header',
        section: <ArtHeader />
    },
    {
        title: <><MdOutlinePolyline className='title-icon' /> Graphisme</>,
        id: 'graphics',
        link: '/art#graphics',
        section: <Graphics />,
        fullWidth: true
    },
    {
        title: <><MdOutlinePhotoCamera className='title-icon' /> Photographie</>,
        id: 'photography',
        link: '/art#photography',
        section: <Photography />,
        fullWidth: true
    },
    {
        title: <><IoMusicalNoteOutline className='title-icon' /> Musique</>,
        id: 'music',
        link: '/art#music',
        section: <Music />,
        fullWidth: true
    },
    // {
    //     title: <><RiVideoOnLine className='title-icon' /> Vidéo</>,
    //     id: 'video',
    //     link: '/art#video',
    //     section: <Video />
    // },
];