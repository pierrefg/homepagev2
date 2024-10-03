import coverPic from './cover.jpg';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

export default function ScienceHeader() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Informatique'
        >
            <div className='flex flex-col gap-3'>
                À travers mes études et mes expériences professionnelles en science des données, j'ai développé un véritable goût pour l'analyse et la visualisation des informations complexes. 
                Mon travail s'inspire des principes d'Edward Tufte, avec une attention particulière portée à la création de visuels clairs et interactifs, facilitant la compréhension de sujets souvent complexes.
                Guidé par une méthode scientifique rigoureuse et un engagement profond pour les causes environnementales, je m'efforce de proposer des solutions innovantes et ancrées dans la littérature. 
                Sur cette page, vous trouverez un aperçu de mes travaux, ainsi que mes publications, logiciels, et interventions lors de séminaires.
            </div>
        </HomePageLayout>
    );
}