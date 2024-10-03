import { BiGame } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";

export const mainMenuLinks = [
    {
        title: <span><BiGame className='icon' /> Mon parcours</span>,
        link: '/about',
        anchor: 'header'
    },
    {
        title: <span><AiOutlineExperiment className='icon' /> Informatique</span>,
        link: '/science',
        anchor: 'header'
    },
    {
        title: <span><LuPaintbrush className='icon'/> Porfolio artistique</span>,
        link: '/art',
        anchor: 'header'
    },
    {
        title: <span><RiQuestionAnswerLine className='icon'/> Contact</span>,
        link: '/contact',
        anchor: 'header'
    }
]; 