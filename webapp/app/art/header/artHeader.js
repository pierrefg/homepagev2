import coverPic from './cover.jpg';

import BackgroundImageLayout from '@/components/BackgroundImageLayout';

import { mainMenuLinks } from '@/components/menu/menuData';

export default function ArtHeader() {
    return (
        <BackgroundImageLayout
            coverPic={coverPic}
            title={mainMenuLinks[2].title}
        >
            De graphisme spatial à photographie militante en passant par motion design et musique électroacoustique,
            vous trouverez ici un aperçu de mes activités artistiques ! 
        </BackgroundImageLayout>
    );
}