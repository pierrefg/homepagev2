import { dataScienceData } from './data';
import ProjectsList from "@/components/projectsList/ProjectsList";

export default function DataScience() {
    return (
        <ProjectsList data={dataScienceData} />
    );
}