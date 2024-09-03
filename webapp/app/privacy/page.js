import { privacyData } from "./data";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Politique de confidentialité",
    "Politique de confidentialité du site pierrefg.com.",
    "/privacy"
)

export default function Privacy() {

    return (
            <div className="px-4 mx-auto mt-[20px] text-sm md:text-base max-w-4xl">
                <div className="text-center">
                    <h1 className="text-base md:text-xl text-center">
                        <strong>
                            Politique de confidentialité
                        </strong>
                    </h1>
                    <span className="pt-4">
                        Date d'entrée en vigueur : 1er septembre 2024
                    </span>
                </div>

                <div className="pt-6">
                    Votre confidentialité est importante pour moi. Cette politique de confidentialité explique comment je, Pierre Faure--Giovagnoli, collecte, utilise, partage et protège vos informations lorsque vous visitez mon site web <i>pierrefg.com</i> (le "Site").
                    <div className="flex flex-col gap-4 mt-4">
                    {
                        privacyData.map(
                            (el, index) => (
                                <div key={index}>
                                    <h2 className="underline">
                                        <strong>
                                            { el.title }
                                        </strong>
                                    </h2>
                                    <p>
                                        { el.content }
                                    </p>
                                </div>
                            )
                       ) 
                    }     
                    </div>               
                </div>
            </div>
    )
}