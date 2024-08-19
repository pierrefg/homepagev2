import TimelineElement from "./TimelineElements";

export default function Timeline({ Icon, title, data }) {
    return (
        <div className="timeline grid md:grid-cols-[180px_1fr] gap-4">
            <div className="timeline-title">
                <Icon className="text-base inline mr-2" />
                <h1>{title}</h1>
            </div>
            <div className="text-white">
                <div className="flex flex-col gap-6">
                    {
                        data.map(
                            (elementData, index) => (
                                <div key={index} className="flex">
                                    <TimelineElement elementData={elementData} />
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}