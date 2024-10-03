import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { scienceSections } from "./scienceSections";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Informatique",
    "Viens découvrir mes projets de science des données, de recherche ainsi que mes publications.",
    "/science"
)

export default function Science() {
    return (
        <SubMenuLayout pagesData={scienceSections} />
    );
}
