import Timeline from "@/components/timeline";
import { teachingData } from "./data";

import { PiChalkboardTeacherLight } from "react-icons/pi";

export default function Teaching() {
    return (
        <div className='flex mt-6 w-full'>
            <Timeline
                Icon = {PiChalkboardTeacherLight}
                title = "Ensignement"
                data = {teachingData}
            />
        </div>
    );
}