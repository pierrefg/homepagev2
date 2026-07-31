import Icon from "@/components/Icon";
import Image from "next/image";

import instaIcon from '@/icons/socials/insta.png';
import linkedinIcon from '@/icons/socials/linkedin.png';
import githubIcon from '@/icons/socials/github.png';
import scholarIcon from '@/icons/socials/scholar.png';
import soundcloudIcon from '@/icons/socials/soundcloud.png';

export default function SocialIcons() {
    var socialIcons = [
        [instaIcon, "https://www.instagram.com/pierre_fg/"],
        [soundcloudIcon, "https://soundcloud.com/p1ps_music"],
        [scholarIcon, "https://scholar.google.com/citations?user=vl3UIQoAAAAJ"],
        [linkedinIcon, "https://www.linkedin.com/in/pierrefg/"],
        [githubIcon, "https://github.com/PierreFG"],
    ]

    return (
        <div className="flex flex-row gap-4 pt-2 pb-4">
            {
                socialIcons.map(
                    ([image, link], _) => (
                        <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:rotate-3"
                        >
                            <Icon img={image} />
                        </a>
                    )
                )
            }
        </div>
    )
}