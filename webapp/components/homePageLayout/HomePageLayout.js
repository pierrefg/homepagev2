import Image from "next/image";

export default function HomePageLayout({children, title, coverPic}) {
    return (
        <div className="md:flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl">
            <div className="w-1/3 md:w-1/4 mx-auto md:h-full pb-4 md:pb-0">
                <Image
                    src={coverPic}
                    className="md:object-cover md:h-full md:w-full rounded-full md:rounded-none"
                    priority
                />
            </div>
            <div className="md:w-3/4 flex flex-col gap-4">
                <h1 className="text-xl">
                    {title}
                </h1>
                <div className="flex flex-col gap-4 md:min-h-[500px]">
                    {children}
                </div>
            </div>
        </div>
    );
}