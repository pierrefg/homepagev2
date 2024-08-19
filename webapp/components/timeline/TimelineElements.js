import { IoLink } from "react-icons/io5";

export default function TimelineElement({ elementData }) {
    if (!elementData) return null;

    return (
        <div className="grid md:grid-cols-[80px_1fr] md:gap-6">

            {/* Visible on Medium and Larger Screens */}
            <div className="hidden md:block">
                <time>{elementData.period}</time><br />
                {elementData.type && (
                    <span className="text-sm text-gray-400">
                        {elementData.type}
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div>
                <h2>                        
                    <strong className="md:p-0">
                        {  
                            elementData.title.link ?
                                <a href={elementData.title.link} target="_blank" rel="noopener noreferrer">
                                    <IoLink className="inline"/> <span className="underline">{elementData.title.name}</span>
                                </a>
                            :
                            <span className="underline">{elementData.title.name}</span>
                        }
                    </strong>
                    <span> {elementData.title.postname}</span>
                </h2>
                <h3>
                    {elementData.subtitle}
                </h3>

                {/* Visible on Smaller Screens */}
                <span className="md:hidden block">
                    <time>{elementData.period}</time><br className="hidden md:block"/>
                    {elementData.type && (
                        <span className="text-sm text-gray-400">
                            <span> | </span>{elementData.type}
                        </span>
                    )}
                </span>
                
                <p>
                {
                    elementData.companies &&
                    elementData.companies.map((company, index) => (
                        <span key={index}>
                            { index>0 && <><span className="hidden md:inline"> | </span><br className="block md:hidden" /></> }
                            {
                                company.link ?
                                <span>
                                    <a href={company.link} target="_blank" rel="noopener noreferrer"><IoLink className="inline"/> {company.name}</a>
                                </span>
                                
                                : 
                                <>{company.name}</>
                            }
                            <span className="hidden md:inlin"> ({company.place})</span>
                        </span>
                    ))
                }
                </p>
                <i>{elementData.description}</i>

                <p>
                    {
                        elementData.links &&
                        elementData.links.map((link, index) => (
                            <span key={index}> 
                                <a href={link.url} className="special-link" target="_blank" rel="noopener noreferrer">
                                    {link.text}
                                </a>
                            </span>
                        ))
                    }
                </p>
            </div>
        </div>
    );
}