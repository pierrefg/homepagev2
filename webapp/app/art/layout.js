import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { artTabs } from './artTabs';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Portfolio artistique",
    "Trouve ici mon portfolio mêlant graphisme, photographie, musique et vidéo.",
    "/art"
)

export default function ArtLayout({ children }) {
    return (
        <SubMenuLayout pagesData={artTabs}>{children}</SubMenuLayout>
    );
}

