import coverPic from './cover.jpg';

import BackgroundImageLayout from '@/components/BackgroundImageLayout';

import { mainMenuLinks } from '@/components/menu/menuData';

export default function AboutHeader() {
    return (
        <BackgroundImageLayout
            coverPic={coverPic}
            title={mainMenuLinks[0].title}
        >
            <div className='flex flex-col gap-3'>
                Découvrez ici un aperçu de mon parcours professionnel et bénévole, ainsi que des établissements où j'ai étudié et enseigné.
            </div>
        </BackgroundImageLayout>
    );
}