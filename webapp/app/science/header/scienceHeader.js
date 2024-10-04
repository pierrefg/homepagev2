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
                À travers mes études et mes expériences professionnelles en science des données, j'ai développé un véritable goût pour l'analyse et la visualisation d'informations complexes. 
                Je m'attache à rendre mes résultat les plus clairs possibles, avec une attention particulière portée à la création de visuels clairs et interactifs.
                Guidé par une méthode scientifique rigoureuse et un engagement pour les causes environnementales, je m'efforce de proposer des solutions innovantes et ancrées dans la littérature. 
                Sur cette page, vous trouverez un aperçu de mes travaux, ainsi qu'un inventaire mes publications, logiciels, et interventions lors de séminaires.
            </div>
        </BackgroundImageLayout>
    );
}