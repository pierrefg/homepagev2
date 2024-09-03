import { MdOutlinePlace } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

import { mainMenuLinks } from "@/components/menu/menuData";

import SimpleLink from "@/components/SimpleLink";

export default function AboutContent() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-0">
                <span>
                    <MdOutlinePlace className="inline text-base" /> Basé à Lyon
                </span>
                <span>
                    <IoLanguage className="inline text-base" /> Parle le français, l'anglais et (un petit peu) l'allemand
                </span>
            </div>
            <div>
                Bienvenue sur mon site ! Je suis scientifique des données mais aussi graphiste et photographe. 
                Que ce soit dans le milieu professionnel ou associatif, je place toujours au centre de mes préoccupations les enjeux sociaux et environnementaux qui me tiennent à cœur. 
                Vous pouvez aller jeter un coup d'oeil à ce que j'ai fait ces dernière années par ici.

                <p className="mt-2 text-center">
                    <SimpleLink content={mainMenuLinks[0]} primary large/>
                </p>
            </div>
            <div>
                Dans mon activité scientifique, je pratique principalement la science des données et le développement.
                Diplomé INSA Lyon et Georgia Tech ainsi que détenteur d'un doctorat en informatique, je possède une large palette créative et technique pour répondre à des problématiques complexes.
                
                <p className="mt-2 text-center">
                    <SimpleLink content={mainMenuLinks[1]} primary large/>
                </p>
            </div>
            <div>
                En parallèle de mon activité scientifique, je m'investis dans des projets artistiques, offrant des services mêlant graphisme, photographie et vidéo (voir musique ?).
                C'est notamment dans le milieu associatif que j'ai pu mettre à profit ces différentes activités et développer mes compétences.   
                <p className="mt-2 text-center">
                    <SimpleLink content={mainMenuLinks[2]} primary large/>
                </p>
            </div>
            <div>
                Vous trouverez sur ce site un aperçu des domaines qui m'intéressent. 
                N'hésitez pas à me contacter pour toute collaboration ou simplement pour poser une question !
                <p className="mt-2 text-center">
                    <SimpleLink content={mainMenuLinks[3]} primary large/>
                </p>
            </div>

            <div className="text-primary-muted text-sm">
                Merci à Pierre Fimbel et Charlotte Delfosse de m'avoir tiré le portrait.
            </div>
        </div>
    );
}