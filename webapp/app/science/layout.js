import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { scienceTabs } from './scienceTabs';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Informatique",
    "Viens découvrir mes projets de science des données, de recherche ainsi que mes publications.",
    "/science"
)

export default function ScienceLayout({ children }) {
    return (
        <SubMenuLayout pagesData={scienceTabs}>{children}</SubMenuLayout>
    );
}

