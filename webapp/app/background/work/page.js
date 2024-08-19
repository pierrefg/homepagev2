import Timeline from "@/components/Timeline";
import { workData } from "./data";

import { AiOutlineTool } from "react-icons/ai";

export default function Work() {
    return (
        <>
            <Timeline
                Icon = {AiOutlineTool}
                title = "Expérience"
                data = {workData}
            />
        </>
    );
}