import Link from "next/link";

import Portrait from "@/components/Portrait";

import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { MdOutlinePlace } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

export default function About() {
    return (
        <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 md:max-w-4xl">
            <div className="w-1/3 md:w-1/4 mx-auto pb-4">
                <Portrait size={400} src='/imgs/portrait2.jpg' />
            </div>
            <div className="md:w-3/4 flex flex-col gap-4">
                <h1 className="text-xl">
                    Pierre Faure--Giovagnoli
                </h1>
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
                    Bienvenue sur mon site ! Je suis à la fois scientifique des données, graphiste et photographe. 
                    Que ce soit dans le milieu professionnel ou associatif, je place toujours au centre de mes préoccupations les enjeux sociaux et environnementaux qui me tiennent à cœur. 
                    Lorsque je trouve du sens à un projet, je m'y engage pleinement.
                    </p>
                    <p>
                        Dans mon activité scientifique, je pratique principalement la science des données et développement.
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
                                href="/art"
                            >
                                <LuPaintbrush className="inline text-xl "/> Me contacter
                            </Link>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}