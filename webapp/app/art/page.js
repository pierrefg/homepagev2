import planetPic from './graphics/content/space/A.png';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import Gallery from '@/components/gallery/Gallery';
import SimpleLink from "@/components/SimpleLink";

import { graphicBestOf } from './content/graphicBestOf';
import { photoBestOf } from './content/photoBestOf';

import { artTabs } from "./artTabs";

var img_size = 130;

export default function Art() {
    return (
        <HomePageLayout
            coverPic={planetPic}
            title='Activité artistique'
        >
            <div className="flex flex-col gap-8">
                <p>
                    De graphisme spacial à photographie miliante en passant par motion design et musique électroacoustique,
                    vous trouverez ici un aperçu de mes activités artistiques ! 
                </p>
                <div className="flex flex-col gap-6 text-center">
                    <div>
                        <SimpleLink content={artTabs[1]} />
                    </div>
                    <Gallery galleryData={graphicBestOf} size={img_size} />
                    
                </div>
                
                <div className="flex flex-col gap-6 text-center">
                    <div>
                        <SimpleLink content={artTabs[2]} />
                    </div>
                    <Gallery galleryData={photoBestOf} size={img_size} />
                </div>

                <div className="hidden md:block text-center">
                    Je fais aussi de la<> </>
                    <SimpleLink content={artTabs[3]} />
                    <> et de la </>
                    <SimpleLink content={artTabs[4]} />
                    <> !</>
                </div>
                <div className="flex flex-col gap-4 md:hidden text-center">
                    <div>
                        Découvrez aussi:
                    </div>
                    <div className="flex flex-row gap-4 mx-auto">
                        <SimpleLink content={artTabs[3]} />
                        <SimpleLink content={artTabs[4]} />
                    </div>
                </div>
            </div>
        </HomePageLayout>
    );
}