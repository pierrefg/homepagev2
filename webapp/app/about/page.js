import coverPic from './cover.jpg';

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import AboutContent from "./AboutContent";

export default function About() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Pierre Faure--Giovagnoli'
        >
            <AboutContent />
        </HomePageLayout>
    );
}