import { BiGame } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";

export const mainMenuLinks = [
    {
        title: <strong><BiGame className='icon' /> Mon parcours</strong>,
        link: '/about'
    },
    {
        title: <strong><AiOutlineExperiment className='icon' /> Informatique</strong>,
        link: '/science'
    },
    {
        title: <strong><LuPaintbrush className='icon'/> Porfolio artistique</strong>,
        link: '/art'
    },
    {
        title: <strong><RiQuestionAnswerLine className='icon'/> Contact</strong>,
        link: '/contact'
    }
]; 