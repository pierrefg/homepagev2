import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

import coverPic from './cover.jpg';

export default function ArtHeader() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Activité artistique'
        >
            De graphisme spatial à photographie militante en passant par motion design et musique électroacoustique,
            vous trouverez ici un aperçu de mes activités artistiques ! 
        </HomePageLayout>
    );
}