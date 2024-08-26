import Timeline from "@/components/timeline/Timeline";

import { publicationsData } from "./publicationsData";
import { authorsData } from "./authorsData";
import { seminarsData } from "./seminarsData";

import { IoDocumentsOutline } from "react-icons/io5";
import { RiPresentationFill } from "react-icons/ri";

export default function Publications() {
    return (
        <div className="justify-center">
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
        </div>
    );
}