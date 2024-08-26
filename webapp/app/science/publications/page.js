import Timeline from "@/components/timeline/Timeline";

import { publicationsData } from "./publicationsData";
import { authorsData } from "./authorsData";

import { IoDocumentsOutline } from "react-icons/io5";

export default function Publications() {
    return (
        <>
            <Timeline
                Icon = {IoDocumentsOutline}
                title = "Publications"
                data = {publicationsData}
                authorData = {authorsData}
                largeDate = {true}
            />
        </>
    );
}