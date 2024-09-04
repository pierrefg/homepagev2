import './style.css'

import TimelineElement from "./TimelineElements";

export default function Timeline({ Icon, title, data, authorData, largeDate=false }) {
    return (
        <div className="">
            <div className="text-center mb-4">
                <h1 className='inline text-lg'>
                    <Icon className="text-base inline mr-2 mx-auto " /> {title}
                </h1>
            </div>
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
    );
}