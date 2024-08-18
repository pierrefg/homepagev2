import Timeline from "@/components/timeline";
import { workData } from "./data";

import { AiOutlineTool } from "react-icons/ai";

export default function Work() {
    return (
        <div className='flex mt-6 w-full'>
            <Timeline
                Icon = {AiOutlineTool}
                title = "Enseignement"
                data = {workData}
            />
        </div>
    );
}