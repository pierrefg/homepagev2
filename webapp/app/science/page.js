import Link from "next/link";

import coverPic from './research/imgs/diatom.png';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

export default function Science() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Informatique'
        >
            <>
                <p>
                    Dans cette partie, vous trouvez
                </p>
                <p>
                    J'ai mis beaucoup d'amour dans la création de ce site, retrouvez toutes les sources sur<> </>
                    <Link 
                        className="special-link py-1"
                        href="https://github.com/pierrefg/pierrefg.com"
                        target="__blank"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </>
        </HomePageLayout>
    );
}