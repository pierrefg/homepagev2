import { dataScienceData } from './data';
import ProjectsList from "@/components/projectsList/ProjectsList";
import { BiSolidInfoSquare } from "react-icons/bi";

export default function DataScience() {
    return (
        <div>
            {/* <h2 className='text-center p-3 mb-8 border-solid border-primary border-2 md:max-w-4xl mx-auto'>
                <BiSolidInfoSquare className='text-2xl mx-auto'/>
                Sur cette page, je décris plusieurs projets de science des données que j'ai menés, notamment au sein de DataValor.
                Pour des raisons de confidentialité, je ne peux souvent pas révéler les noms des entreprises commanditaires ni détailler précisément les techniques employées.
            </h2> */}
            <ProjectsList data={dataScienceData} />
        </div>
    );
}