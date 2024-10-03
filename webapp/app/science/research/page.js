import { researchData } from './research';
import ProjectsList from "@/components/projectsList/ProjectsList";

export default function Research() {
    return (
        <ProjectsList data={researchData} />
    );
}