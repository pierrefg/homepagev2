import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { artSections } from './artSections';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Portfolio artistique",
    "Trouve ici mon portfolio mêlant graphisme, photographie, musique et vidéo.",
    "/art"
)

export default function Art() {
    return (
        <SubMenuLayout pagesData={artSections} />
    );
}