import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { scienceSections } from "./scienceSections";

import { createPageMetadata } from '@/utils/metadata';
import ScienceHeader from './header/scienceHeader';


export const metadata = createPageMetadata(
    "Informatique",
    "Viens découvrir mes projets de science des données, de recherche ainsi que mes publications.",
    "/science"
)

export default function Science() {
    return (
        <>
            <ScienceHeader />
            <SubMenuLayout pagesData={scienceSections} />
        </>  
    );
}
