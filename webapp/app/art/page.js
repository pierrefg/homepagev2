import coverPic from './cover.jpg';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import SimpleLink from "@/components/SimpleLink";

import { graphicBestOf } from './content/graphicBestOf';
import { photoBestOf } from './content/photoBestOf';

import { artTabs } from "./artTabs";

import Image from "next/image";

var img_size = 130;

export default function Art() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Activité artistique'
        >
            <div className="flex flex-col gap-8">
                <p>
                    De graphisme spacial à photographie militante en passant par motion design et musique électroacoustique,
                    vous trouverez ici un aperçu de mes activités artistiques ! 
                </p>
                <div className="flex flex-col gap-6 text-center mx-auto justify-center">
                    <div>
                        <SimpleLink content={artTabs[1]} />
                    </div>
                    <div className="flex flex-row flex-wrap gap-6 justify-center">
                        {
                            graphicBestOf.imgs.slice(0, 4).map(
                                (el, index) => (
                                    <Image
                                        key={index}
                                        src={el.img}
                                        placeholder={'blur'}
                                        height={img_size}
                                        style={{ objectFit: "contain" }}
                                    />
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col gap-6 text-center mx-auto justify-center">
                    <div>
                        <SimpleLink content={artTabs[2]} />
                    </div>
                    {/* <Gallery galleryData={photoBestOf} size={img_size} /> */}
                    <div className="flex flex-row flex-wrap gap-6 justify-center">
                        {
                            photoBestOf.imgs.slice(0, 4).map(
                                (el, index) => (
                                    <Image
                                        key={index}
                                        src={el.img}
                                        placeholder={'blur'}
                                        height={img_size}
                                        style={{ objectFit: "contain" }}
                                    />
                                )
                            )
                        }
                    </div>
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