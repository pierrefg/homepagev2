import Image from "next/image";
import CoverPic from "./talk.jpg";

import Timeline from "@/components/timeline/Timeline";

import { publicationsData } from "./publicationsData";
import { authorsData } from "./authorsData";
import { seminarsData } from "./seminarsData";
import { softwareData } from './softwareData';
import { miscData } from './miscData';

import { IoDocumentsOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { VscSymbolMisc } from "react-icons/vsc";

export default function Publications() {
    return (
        <div className="justify-center">
            <Image
                src={CoverPic}
                className="rounded-full w-[200px] h-[200px] mx-auto mb-8"
                placeholder={'blur'}
                priority
            />
            <Timeline
                Icon = {IoDocumentsOutline}
                title = "Publications"
                data = {publicationsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <div className="my-[40px]"/>
            <Timeline
                Icon = {RiPresentationFill}
                title = "Séminaires"
                data = {seminarsData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <div className="my-[40px]"/>
            <Timeline
                Icon = {FaCode}
                title = "Logiciels"
                data = {softwareData}
                authorData = {authorsData}
                largeDate = {true}
            />
            <div className="my-[40px]"/>
            <Timeline
                Icon = {VscSymbolMisc}
                title = "Divers"
                data = {miscData}
                largeDate = {true}
            />
        </div>
    );
}