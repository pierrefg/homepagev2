import Image from "next/image";

export default function Icon({img, invert=false}) {
    return (
        <Image 
            src={img} 
            alt='icon'
            width={25} height={25} 
            className={`inline ${invert ? 'invert' : ''}`}
        />
    )
}