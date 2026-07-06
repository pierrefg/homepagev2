import { createPageMetadata } from '@/utils/metadata';

import AscImage from "@/components/ascImage/AscImage";

import coverPic from '../content/cover.jpg';

export const metadata = createPageMetadata(
    "The Vo1d",
    "Juste le vide.",
    "/void"
)

export default function LandingTop() {

    return (
        <div className={`absolute h-full w-full z-10 pointer-events-none`}>
            HELLO ?
            <AscImage imgSrc={coverPic} size={500} res={10} />
            HELLO !
        </div>
    ) 
}