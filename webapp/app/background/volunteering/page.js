import Timeline from "@/components/timeline/Timeline";
import { volunteeringData } from "./data";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function Volunteering() {
    return (
        <>
            <Timeline
                Icon = {MdOutlineVolunteerActivism}
                title = "Bénévolat"
                data = {volunteeringData}
            />
        </>
    );
}