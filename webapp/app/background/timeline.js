export default function Timeline({ Icon, title, data }) {
    if (!data) return null;

    return (
        <div className="timeline w-full grid md:grid-cols-7 gap-4">
            <div className="timeline-title">
                <Icon className="text-base inline mr-2" />
                <h1>{title}</h1>
            </div>
            <div className="md:col-span-6 text-white">
                <ul>
                    {data.map((experience, index) => (
                        <li key={index} className="mt-4">
                            <div className="grid md:grid-cols-5 md:gap-6">

                                {/* Visible on Medium and Larger Screens */}
                                <div className="md:col-span-1 hidden md:block">
                                    <time>{experience.period}</time><br />
                                    {experience.type && (
                                        <span className="text-sm text-gray-400">
                                            {experience.type}
                                        </span>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="md:col-span-4">
                                    <h2 className="">
                                        <strong className="md:p-0 underline">{experience.title}</strong>
                                    </h2>

                                    {/* Visible on Smaller Screens */}
                                    <span className="md:hidden block mt-2">
                                        <time>{experience.period}</time><br className="hidden md:block"/>
                                        {experience.type && (
                                            <span className="text-sm text-gray-400">
                                                <span> | </span>({experience.type})
                                            </span>
                                        )}
                                    </span>
                                    
                                    <p>{experience.company}</p>
                                    <i>{experience.description}</i>
                                    {experience.link && (
                                        <span> 
                                            <a href={experience.link.url} target="_blank" rel="noopener noreferrer">
                                                {experience.link.text}
                                            </a>
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}