import Footer from "@/components/Footer";

import HomePageLayout from "@/components/homePageLayout/HomePageLayout";
import AboutContent from "./AboutContent";
import coverPic from '../cover.jpg';

export default function About() {
    return (
        <>
            <div className='flex flex-grow justify-center items-center p-6 z-20'>
                <HomePageLayout
                    coverPic={coverPic}
                    title='Pierre Faure--Giovagnoli'
                >
                    <AboutContent />
                </HomePageLayout>
            </div>
            <Footer />
        </>
    ) 
}