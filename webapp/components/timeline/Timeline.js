import './style.css'

import TimelineElement from "./TimelineElements";

export default function Timeline({ Icon, title, data, authorData, largeDate=false }) {
    return (
        <div className="timeline grid md:grid-cols-[180px_1fr] gap-4">
            <div className="timeline-title">
                <Icon className="text-base inline mr-2" />
                <h1>{title}</h1>
            </div>
            <div className="text-primary">
                <div className="flex flex-col gap-6">
                    {
                        data.map(
                            (elementData, index) => (
                                <div key={index} className="flex">
                                    <TimelineElement 
                                        elementData={elementData} 
                                        authorData={authorData} 
                                        largeDate={largeDate}
                                    />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}