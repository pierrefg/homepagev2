import Link from "next/link";

import coverPic from './cover.jpg';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import SimpleLink from "@/components/SimpleLink";

import { IoCodeSlashSharp } from "react-icons/io5";
import { scienceTabs } from "./scienceTabs";

export const scienceContent = [
    {
        content: <>
            À travers mes études, ma thèse de master et mon doctorat en informatique, j'ai développé un attrait particulier pour la science des données.
            J'aime décortiquer de nouveaux sujets, de la compréhension du domaine métier jusqu'au code et la proposition de solutions innovantes.
            J'apprécie également créer des visuels intuitifs et interactifs pour illustrer des données qu'il est parfois difficile de décrire avec des mots - les travaux d'Edward Tufte m'ont d'ailleurs bien inspiré !
        </>,
        linkIndex: 1
    },
    {
        content: <>
            Tous mes travaux sont naturellement ancrés dans la littérature.
            Mes expériences de recherche m'ont initié à la méthode scientifique et poussé à comprendre en profondeur un sujet avant de m'y attaquer.
            Les projets que j'ai pu mener se sont toujours inscrits dans mes combats environnementaux, et vous en trouverez un aperçu sur les pages qui suivent.
        </>,
        linkIndex: 2
    },
    {
        content: <>
           Retrouvez également ici l'ensemble de mes publications, logiciels, séminaires, etc. 
        </>,
        linkIndex: 3
    }
]

export default function Science() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Informatique'
        >
            <div className="flex flex-col gap-6">
                {
                    scienceContent.map(
                        (el, index) => (
                            <div key={index}>
                                {el.content}
                                <p className='mt-2 text-center'>
                                    <SimpleLink content={scienceTabs[el.linkIndex]} />
                                </p>
                            </div>
                        )
                    )
                }

                <p>
                    <IoCodeSlashSharp className="inline text-lg"/> Comme j'aime aussi coder, j'ai mis beaucoup d'amour dans la création de ce site. Retrouvez toutes les sources sur<> </>
                    <Link 
                        className="btn btn-secondary py-1"
                        href="https://github.com/pierrefg/pierrefg.com"
                        target="_blank"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </HomePageLayout>
    );
}
