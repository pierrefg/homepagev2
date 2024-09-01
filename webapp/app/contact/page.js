import coverPic from '@/app/art/photography/content/london/H.png'
import ContactForm from '@/components/form/ContactForm';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

import { LuPartyPopper } from "react-icons/lu";

export default function Contact() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Contactez-moi !'
        >
            <>
                <p>
                    Pour tout projet, collaboration ou question : n'hésitez pas <LuPartyPopper className='inline' />
                </p>
                <ContactForm />
            </>
        </HomePageLayout>
        
    );
}
