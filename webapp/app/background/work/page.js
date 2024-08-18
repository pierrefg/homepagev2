import Timeline from "@/components/timeline";
import { workData } from "./data";

import { AiOutlineTool } from "react-icons/ai";

export default function Work() {
    return (
        <div className='flex w-full'>
            <Timeline
                Icon = {AiOutlineTool}
                title = "Expérience"
                data = {workData}
            />
        </div>
    );
}