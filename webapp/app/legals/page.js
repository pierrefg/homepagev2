import { legalData } from "./data"

export default function Legals() {

    return (
            <div className="px-4 mx-auto mt-[20px] text-sm md:text-base max-w-4xl">
                <h1 className="text-base md:text-xl text-center">
                    <strong>
                        Mentions légales
                    </strong>
                </h1>

                <div className="flex flex-col gap-6 md:items-center mt-6">  {/* Added items-center to center the content */}
                    {
                        legalData.map(
                            (data, index) => (
                                <div key={index} className="md:flex md:flex-row justify-center">  {/* Added w-full and justify-center */}
                                    <div className="md:w-[400px] md:text-right md:mr-4 underline md:no-underline">
                                        {data.title}
                                    </div>
                                    <div className="md:w-[400px] border-l-solid md:border-l-2 md:border-l-primary-muted md:pl-4">
                                        {data.content}
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
    )
}