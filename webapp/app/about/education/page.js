import Timeline from "@/components/timeline/Timeline";
import { educationData } from "./data";

import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
    return (
        <div className="mx-auto">
            <Timeline
                Icon = {IoSchoolOutline}
                title = "Formation"
                data = {educationData}
            />
        </div>
    );
}