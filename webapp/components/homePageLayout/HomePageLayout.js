import './style.css';

import Image from "next/image";

export default function HomePageLayout({children, title, coverPic}) {
    return (
        <div className="relative w-full flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={coverPic}
                    alt="Background image"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    className="opacity-30"
                    priority
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0bg-opacity-50"></div>

            {/* Text Content */}
            <div className="relative z-10 max-w-4xl text-center p-6">
                <h1 className="text-4xl font-bold mb-6">
                {title}
                </h1>
                <div className="text-lg">
                {children}
                </div>
            </div>
        </div>
    );
}
