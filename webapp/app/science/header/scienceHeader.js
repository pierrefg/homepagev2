import coverPic from './cover.jpg';

import BackgroundImageLayout from '@/components/BackgroundImageLayout';

import { mainMenuLinks } from '@/components/menu/menuData';

export default function ScienceHeader() {
    return (
        <BackgroundImageLayout
            coverPic={coverPic}
            title={mainMenuLinks[1].title}
        >
            <div className='flex flex-col gap-3'>   
                Retrouvez ici mes projets de science des données, mes sujets de recherche ainsi qu'un petit inventaire de mes publications, logiciels et séminaires.
            </div>
        </BackgroundImageLayout>
    );
}