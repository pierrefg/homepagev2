import Timeline from "@/components/timeline/Timeline";
import { teachingData } from "./data";

import { PiChalkboardTeacherLight } from "react-icons/pi";

export default function Teaching() {
    return (
        <div className="mx-auto">
            <Timeline
                Icon = {PiChalkboardTeacherLight}
                title = "Enseignement"
                data = {teachingData}
            />
        </div>
    );
}