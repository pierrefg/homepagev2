import { artSections } from './artSections';

import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';
import { createPageMetadata } from '@/utils/metadata';

import ArtHeader from './header/artHeader';

export const metadata = createPageMetadata(
    "Portfolio artistique",
    "Trouve ici mon portfolio mêlant graphisme, photographie, musique et vidéo.",
    "/art"
)

export default function Art() {
    return (
        <>
            <ArtHeader />
            <SubMenuLayout pagesData={artSections} />
        </>  
    );
}