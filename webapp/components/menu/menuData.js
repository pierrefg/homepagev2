import { BiGame } from "react-icons/bi";
import { AiOutlineExperiment } from "react-icons/ai";
import { LuPaintbrush } from "react-icons/lu";
import { RiQuestionAnswerLine } from "react-icons/ri";

export const mainMenuLinks = [
    {
        title: <span><BiGame className='icon' /> Qui suis-je ?</span>,
        link: '/about'
    },
    {
        title: <span><AiOutlineExperiment className='icon' /> Informatique</span>,
        link: '/science'
    },
    {
        title: <span><LuPaintbrush className='icon'/> Porfolio artistique</span>,
        link: '/art'
    },
    {
        title: <span><RiQuestionAnswerLine className='icon'/> Contact</span>,
        link: '/contact'
    }
]; 