import Icon from '@/components/Icon.js';

import parcoursIcon from '@/icons/parcours.png';
import scienceIcon from '@/icons/informatique.png';
import portfolioIcon from '@/icons/portfolio.png';
import contactIcon from '@/icons/contact.png';

import { LuPartyPopper } from "react-icons/lu";

import aboutCover from './imgs/about_cover.jpg';
import artCover from './imgs/art_cover.jpg';
import scienceCover from './imgs/science_cover.jpg';
import contactCover from './imgs/contact_cover.jpg';

export const mainMenuLinks = [
    {
        icon: <Icon img={parcoursIcon} invert={true} />,
        title: 'Mon parcours',
        link: '/about',
        description: "Découvrez ici un aperçu de mon parcours professionnel et bénévole, ainsi que des établissements dans lesquels j'ai étudié ou enseigné.",
        coverPic: aboutCover
    },
    {
        icon: <Icon img={scienceIcon} invert={true} />,
        title: 'Informatique',
        link: '/science',
        description: "Retrouvez ici mes projets de science des données, mes sujets de recherche ainsi qu'un petit inventaire de mes publications, logiciels et séminaires.",
        coverPic: scienceCover
    },
    {
        icon: <Icon img={portfolioIcon} invert={true} />,
        title: 'Porfolio artistique',
        link: '/art',
        description: "De graphisme spatial à photographie militante en passant par vidéo et musique électroacoustique, vous trouverez ici un aperçu de mes activités artistiques ! ",
        coverPic: artCover
    },
    {
        icon: <Icon img={contactIcon} invert={true} />,
        title: 'Contact',
        link: '/contact',
        description: <>
            Pour tout projet, collaboration ou juste pour dire bonjour : n'hésitez pas ! <LuPartyPopper className='inline' />
            <br />
        </>,
        coverPic: contactCover
    }
]; 