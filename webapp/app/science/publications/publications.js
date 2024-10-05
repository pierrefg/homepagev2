import Image from "next/image";
import CoverPic from "./talk.jpg";

import Timeline from "@/components/timeline/Timeline";

import { publicationsData } from "./data/publicationsData";
import { authorsData } from "./data/authorsData";
import { seminarsData } from "./data/seminarsData";
import { softwareData } from './data/softwareData';
import { miscData } from './data/miscData';

import { IoDocumentsOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { VscSymbolMisc } from "react-icons/vsc";

export default function Publications() {
    return (
        <div className="justify-center">
            <Image
                src={CoverPic}
                className="rounded-full w-[200px] h-[200px] mx-auto"
                placeholder={'blur'}
                priority
            />
            
            <h2 className='text-center my-[40px]'>/// Publications</h2>
            <Timeline
                Icon = {IoDocumentsOutline}
                title = "Publications"
                data = {publicationsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h2 className='text-center my-[40px]'>/// Séminaires</h2>
            <Timeline
                Icon = {RiPresentationFill}
                title = "Séminaires"
                data = {seminarsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h2 className='text-center my-[40px]'>/// Logiciels</h2>
            <Timeline
                Icon = {FaCode}
                title = "Logiciels"
                data = {softwareData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <h2 className='text-center my-[40px]'>/// Divers</h2>
            <Timeline
                Icon = {VscSymbolMisc}
                title = "Divers"
                data = {miscData}
                largeDate = {true}
            />
        </div>
    );
}