import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';
import { aboutSections } from './aboutSections';
import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Mon parcours",
    "Découvrez ici mon parcours académique, bénévole et professionnel.",
    "/about"
)

export default function About() {
    return (
        <SubMenuLayout pagesData={aboutSections} />
    );
}