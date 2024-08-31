import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub, AiOutlineYoutube   } from "react-icons/ai";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { SlSocialSoundcloud } from "react-icons/sl";

export default function SocialIcons() {
    var socialIcons = [
        [AiOutlineInstagram, "https://www.instagram.com/pierre_fg/"],
        [AiOutlineYoutube, "https://www.youtube.com/@pierrefg"],
        [SlSocialSoundcloud, "https://soundcloud.com/pierrefg"],
        [AiOutlineLinkedin, "https://www.linkedin.com/in/pierrefg/"],
        [HiOutlineAcademicCap, "https://scholar.google.com/citations?user=vl3UIQoAAAAJ"],
        [AiOutlineGithub, "https://github.com/PierreFG"],
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