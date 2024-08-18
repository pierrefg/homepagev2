import Timeline from "@/components/timeline";
import { volunteeringData } from "./data";

import { MdOutlineVolunteerActivism } from "react-icons/md";

export default function Volunteering() {
    return (
        <div className='flex mt-6 w-full'>
            <Timeline
                Icon = {MdOutlineVolunteerActivism}
                title = "Ensignement"
                data = {volunteeringData}
            />
        </div>
    );
}