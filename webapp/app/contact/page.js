import Link from "next/link";

import coverPic from '@/app/art/photography/content/london/H.png';
import ContactForm from '@/components/form/ContactForm';
import HomePageLayout from "@/components/homePageLayout/HomePageLayout";

import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

export default function Contact() {
    return (
        <HomePageLayout
            coverPic={coverPic}
            title='Contactez-moi !'
        >
            <div className="flex flex-col gap-4">
                <p>
                    Pour tout projet, toute collaboration ou question : n'hésitez pas <LuPartyPopper className='inline' />
                </p>
                <p className="leading-6">
                    <>Retrouvez également une description de mes </>
                    <Link 
                        className="btn btn-secondary"
                        href="/contact/services"
                    >
                        <span><MdOutlineDesignServices className='inline' /> Prestations</span>
                    </Link>
                    .
                </p>
                <ContactForm />
            </div>
        </HomePageLayout>
        
    );
}
