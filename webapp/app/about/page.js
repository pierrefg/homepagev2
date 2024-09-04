import coverPic from './cover.jpg';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import { aboutTabs } from './aboutTabs';

import SimpleLink from '@/components/SimpleLink';

const aboutContent = [
    {
        content: <>
            Dans les pages de cette section, je vous détaille les expériences qui ont façonné mes dernières années !
            Après quelques stages et de chouettes expériences de recherche, je suis aujourd'hui travailleur indépendant.
            Je propose notamment mes services en science des données à l'entreprise DataValor pour divers projets dans les domaines médical et des énergies renouvelables. 
        </>,
        linkIndex: 1
    },
    {
        content: <>
           En parallèle, je m'investis dans plusieurs associations dans le social et l'écologie.
           J'y propose mes services de graphiste, développeur, photographe ou encore cuisinier.
        </>,
        linkIndex: 2
    },
    {
        content: <>
           Tout cela s'inscrit dans une longue formation qui a commencé au conservatoire Gabriel Fauré à Angoulême jusqu'à un doctorat à Lyon en passant par un échange avec l'université américaine Georgia Tech.
           Encore aujourd'hui, j'apprends tous les jours de mes projets et c'est parti pour continuer !
        </>,
        linkIndex: 3
    },
    {
        content: <>
           Durant mon parcours, j'ai aussi donné plus de 200 heures d'enseignement à des élèves de l'INSA.
        </>,
        linkIndex: 4
    },
]

export default function About() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Mon parcours'
        >
            <div className='flex flex-col gap-3'>
                {
                    aboutContent.map(
                        (el, index) => (
                            <div key={index}>
                                {el.content}
                                <p className='mt-2 text-center'>
                                    <SimpleLink content={aboutTabs[el.linkIndex]} />
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </HomePageLayout>
    );
}