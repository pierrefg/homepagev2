import Link from "next/link";

import coverPic from './research/imgs/diatom.png';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

import { scienceTabs } from "./scienceTabs";

export default function Science() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Informatique'
        >
            <div>
                <div>
                    [WIP]
                    <p className="mt-2 text-center">
                        <Link 
                            className="btn btn-secondary py-1"
                            href={scienceTabs[1].link}
                        >
                            {scienceTabs[1].title}
                        </Link>
                    </p>

                </div>

                <p>
                    J'ai mis beaucoup d'amour dans la création de ce site, retrouvez toutes les sources sur<> </>
                    <Link 
                        className="btn btn-secondary py-1"
                        href="https://github.com/pierrefg/pierrefg.com"
                        target="__blank"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </HomePageLayout>
    );
}