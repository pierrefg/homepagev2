import coverPic from './cover.jpg';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

import SimpleLink from '@/components/SimpleLink';

import { aboutHeaderContent } from './data';

export default function AboutHeader() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Mon parcours'
        >
            <div className='flex flex-col gap-3'>
                Entre science science des données et développement durable, j'ai façonné ma carrière à travers des projets complets et un parcours académique riche allant du conservatoire Gabriel Fauré à un doctorat en informatique à l'INSA Lyon. 
                Aujourd'hui, en tant que travailleur indépendant, je collabore avec DataValor dans les secteurs médical et des énergies renouvelables, tout en m'investissant dans des associations sociales et écologiques. 
                Polyvalent, je mets également mes talents de graphiste, développeur et photographe au service de diverses causes, sans jamais cesser d'apprendre et de partager mes connaissances à travers l'enseignement.
            </div>
        </HomePageLayout>
    );
}