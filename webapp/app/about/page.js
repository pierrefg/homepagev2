import coverPic from './cover.jpg';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import { aboutTabs } from './aboutTabs';

import SimpleLink from '@/components/SimpleLink';

export default function About() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Mon parcours'
        >
            <div className='flex flex-col gap-3'>
                [WIP]
                <div>
                    <p>
                        <SimpleLink content={aboutTabs[1]} />
                    </p>
                </div>

                <div>
                    <p>
                        <SimpleLink content={aboutTabs[2]} />
                    </p>
                </div>

                <div>
                    <p>
                        <SimpleLink content={aboutTabs[3]} />
                    </p>
                </div>

                <div>
                    <p>
                        <SimpleLink content={aboutTabs[4]} />
                    </p>
                </div>
            </div>
        </HomePageLayout>
    );
}