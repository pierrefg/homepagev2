import Image from "next/image";

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
            </>
        </HomePageLayout>
    );
}