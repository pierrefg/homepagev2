import Image from "next/image";
import Link from "next/link";

import planetPic from './graphics/content/space/A.png';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import Gallery from '@/components/gallery/Gallery';

import { graphicBestOf } from './content/graphicBestOf';
import { photoBestOf } from './content/photoBestOf';

import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { MdOutlinePolyline } from "react-icons/md";
import { RiVideoOnLine } from "react-icons/ri";

var img_size = 130;

export default function Art() {
    return (
        <HomePageLayout
            coverPic={planetPic}
            title='Activité artistique'
        >
            <div className="flex flex-col gap-8">
                <p>
                    De graphisme spacial à photographie miliante en passant par motion design et musique électroacoustique,
                    vous trouverez ici un aperçu de mes activités artistiques ! 
                </p>
                <div className="flex flex-col gap-6 text-center">
                    <div>
                        <Link 
                            className="btn btn-secondary py-1"
                            href="/art/photography"
                        >
                            <MdOutlinePolyline className="inline text-xl"/> Graphisme
                        </Link>
                    </div>
                    <Gallery galleryData={graphicBestOf} size={img_size} />
                    
                </div>
                
                <div className="flex flex-col gap-6 text-center">
                    <div>
                        <Link 
                            className="btn btn-secondary py-1"
                            href="/art/photography"
                        >
                            <MdOutlinePhotoCamera className="inline text-xl "/> Photographie
                        </Link>
                    </div>
                    <Gallery galleryData={photoBestOf} size={img_size} />
                </div>

                <div className="hidden md:block text-center">
                    Je fais aussi de la<> </>
                    <Link 
                        className="btn btn-secondary py-1"
                        href="/art/music"
                    >
                        <span><IoMusicalNoteOutline className="inline text-xl "/> Musique</span>
                    </Link>
                    <> et de la </>
                    <Link 
                        className="btn btn-secondary py-1"
                        href="/art/video"
                    >
                        <span><RiVideoOnLine className="inline text-xl "/> Vidéo</span>
                    </Link>
                    <> !</>
                </div>
                <div className="flex flex-col gap-4 md:hidden text-center">
                    <div>
                        Découvrez aussi:
                    </div>
                    <div>
                        <Link 
                            className="btn btn-secondary py-1 mr-2"
                            href="/art/music"
                        >
                            <span><IoMusicalNoteOutline className="inline text-xl "/> Musique</span>
                        </Link>
                        <Link 
                            className="btn btn-secondary py-1"
                            href="/art/video"
                        >
                            <span><RiVideoOnLine className="inline text-xl "/> Vidéo</span>
                        </Link>
                    </div>
                </div>
            </div>
        </HomePageLayout>
    );
}