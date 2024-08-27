import ButtonsList from "@/components/ButtonsList";

import { researchData } from './data';
import ShowMore from "@/components/ShowMore";

import Image from "next/image";

export default function Recherche() {
    return (
        <div className="flex flex-col gap-8">
            { 
                researchData.map(
                    (researchElement, index) => (
                        <div key={index} id={researchElement.id} className="flex flex-col gap-6">
                            { index>0 && <hr className="border-t-2 border-primary w-2/3 mt-4 mx-auto"/>  }
                            <div className="text-center">
                                <h2 className="text-base md:text-1xl font-semibold">{researchElement.title}</h2>
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
                                                <div className="w-[140px] md:text-right md:mr-4">
                                                    {data.role}
                                                </div>
                                                <div className="border-l-solid md:border-l-2 md:border-l-primary-muted md:pl-4">
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
                            <div className="md:flex w-full md:flex-row justify-center md:items-center md:px-8">
                                {
                                    researchElement.img &&
                                    <div className="mx-auto text-center md:w-2/5 md:pr-8 pb-6">
                                        <Image
                                            src={researchElement.img}
                                            width={350}
                                            className="mx-auto rounded-full"
                                        />
                                        <p className="text-primary-muted italic pt-2">{researchElement.imgLegend}</p>
                                    </div>
                                }  
                                
                                    <div className="px-2 md:px-8 border-l-solid border-l-primary-muted border-l-2 text-sm text-justify md:w-3/5">
                                        <div className="hidden md:block">
                                            {researchElement.summary}
                                        </div>
                                        <div className="md:hidden">
                                            <ShowMore textShow="Voir résumé" textHide="Cacher résumé">
                                                {researchElement.summary}
                                            </ShowMore>
                                        </div>
                                    </div>
                            </div>
                                               
                            
                        </div>
                    )
                )
            }
        </div>
    );
}