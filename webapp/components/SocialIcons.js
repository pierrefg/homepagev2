import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

export default function SocialIcons() {
    var socialIcons = [
        [AiOutlineInstagram, "https://www.instagram.com/pierre_fg/"],
        [AiOutlineLinkedin, "https://www.linkedin.com/in/pierrefg/"],
        [AiOutlineMail, "mailto: pierrefg@proton.me"]
    ]

    return (
        <div className="flex flex-row gap-4 pt-2 pb-4">
            {
                socialIcons.map(
                    ([Icon, link], index) => (
                        <a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon icon-link"
                        >
                            <Icon />
                        </a>
                    )
                )
            }
        </div>
    )
}