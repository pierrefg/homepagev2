import Image from "next/image";

export default function Portrait({ size=220 }) {

    return (
        <Image
            src="/imgs/portrait.jpg"
            alt="pierrefg"
            width={size}
            height={size}
            className="rounded-full hover:animate-pulse"
            priority
        />
    )
}