import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';
import { aboutSections } from './aboutSections';
import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mon parcours",
    "Découvrez ici mon parcours académique, bénévole et professionnel.",
    "/about"
)

import AboutHeader from './header/aboutHeader';

export default function About() {
    return (
        <>
            <AboutHeader />
            <SubMenuLayout pagesData={aboutSections} />
        </>
    );
}