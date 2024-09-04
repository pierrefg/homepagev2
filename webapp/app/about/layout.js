import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { aboutTabs } from './aboutTabs';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mon parcours",
    "Découvrez ici mon parcours académique, bénévole et professionnel.",
    "/about"
)

export default function AboutLayout({ children }) {
    console.log(children)
    return (
        <SubMenuLayout pagesData={aboutTabs}>{children}</SubMenuLayout>
    );
}

