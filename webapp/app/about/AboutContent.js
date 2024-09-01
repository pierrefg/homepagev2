import Link from "next/link";

import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

export default function AboutContent() {
    return (
        <>
            <div className="flex flex-col gap-0">
                <span>
                    <MdOutlinePlace className="inline text-base" /> Basé à Lyon
                </span>
                <span>
                    <IoLanguage className="inline text-base" /> Parle le français, l'anglais et (un petit peu) l'allemand
                </span>
            </div>
            <div className="flex flex-col gap-4">
                <p>
                Bienvenue sur mon site ! Je suis scientifique des données mais aussi graphiste et photographe. 
                Que ce soit dans le milieu professionnel ou associatif, je place toujours au centre de mes préoccupations les enjeux sociaux et environnementaux qui me tiennent à cœur. 
                Lorsque je trouve du sens à un projet, je m'y engage pleinement.
                </p>
                <p>
                    Dans mon activité scientifique, je pratique principalement la science des données et le développement.
                    Diplomé INSA Lyon et Georgia Tech ainsi que détenteur d'un doctorat en informatique, je possède une large palette créative et technique pour répondre à tes projets.
                    
                    <div className="mt-2 text-center">
                        <Link 
                            className="special-link py-1"
                            href="/science"
                        >
                            <AiOutlineExperiment className="inline text-xl "/> Voir plus
                        </Link>
                    </div>
                </p>
                <p>
                    En parallèle de mon activité scientifique, je m'investis dans des projets artistiques, offrant des services mêlant graphisme, photographie et vidéo (et même son !).
                    C'est notamment dans le milieu associatif que j'ai pu mettre à profit ces différentes activités et développer mes compétences.   
                    <div className="mt-2 text-center">
                        <Link 
                            className="special-link py-1"
                            href="/art"
                        >
                            <LuPaintbrush className="inline text-xl "/> Voir plus
                        </Link>
                    </div>
                </p>
                <p>
                    Vous trouverez sur ce site un aperçu des domaines qui m'intéressent. 
                    N'hésitez pas à me contacter pour toute collaboration ou simplement pour poser une question !
                    <div className="mt-2 text-center">
                        <Link 
                            className="special-link py-1"
                            href="/contact"
                        >
                            <LuPaintbrush className="inline text-xl "/> Me contacter
                        </Link>
                    </div>
                </p>

                <p className="text-primary-muted">
                    Photo par Pierre Fymbel.
                </p>
            </div>
        </>
    );
}