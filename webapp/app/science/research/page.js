import ButtonsList from "@/components/ButtonsList";

import { researchData } from './data';

export default function Recherche() {
    return (
        <div className="flex flex-col gap-8">
            { 
                researchData.map(
                    (researchElement, index) => (
                        <div key={index} className="flex flex-col gap-6">
                            { index>0 && <hr className="border-t-2 border-primary w-2/3 mt-4 mx-auto"/>  }
                            <div className="text-center">
                                <h2 className="text-1xl font-semibold">{researchElement.title}</h2>
                                <h3 className="italic">{researchElement.subtitle}</h3>
                                {/* <hr className="border-t-2 border-primary w-2/3 mt-4 mx-auto"/> */}
                            </div>
                            <div className="mx-auto">
                                <ButtonsList links={researchElement.links} />
                            </div>
                            <div className="text-center">
                                {researchElement.peopleIntro}
                            </div>
                            <div className="flex flex-col mx-auto gap-4">
                                {
                                    researchElement.people.map(
                                        (data, index) => (
                                            <div key={index} className="flex flex-row items-center">
                                                <div className="w-[150px] text-right mr-4">
                                                    {data.role}
                                                </div>
                                                <div className="border-l-solid border-l-2 pl-4">
                                                    {
                                                        data.list.map(
                                                            (people, index) => (
                                                                <p key={index}>{people.name} {people.surname}</p>
                                                            )
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                            <p className="px-8 border-l-solid border-l-primary border-l-2 text-sm text-justify">
                                {researchElement.summary}
                            </p>
                        </div>
                    )
                )
            }
        </div>
    );
}