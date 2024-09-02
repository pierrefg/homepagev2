import Timeline from "@/components/timeline/Timeline";
import { workData } from "./data";

import { AiOutlineTool } from "react-icons/ai";

export default function Work() {
    return (
        <div className="mx-auto">
            <Timeline
                Icon = {AiOutlineTool}
                title = "Expérience"
                data = {workData}
            />
        </div>
    );
}