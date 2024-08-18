import Timeline from "@/components/timeline";
import { educationData } from "./data";

import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
    return (
        <div className='flex mt-6 w-full'>
            <Timeline
                Icon = {IoSchoolOutline}
                title = "Formation"
                data = {educationData}
            />
        </div>
    );
}