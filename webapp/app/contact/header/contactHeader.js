import Link from "next/link";

import coverPic from './cover.jpg';
import ContactForm from '@/components/form/ContactForm';
import SideImageLayout from "@/components/sideImageLayout";

import { LuPartyPopper } from "react-icons/lu";
import { MdOutlineDesignServices } from "react-icons/md";

export default function ContactHeader() {
    return (
        <SideImageLayout
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
                        href="/contact#services"
                    >
                        <span><MdOutlineDesignServices className='inline' /> Prestations</span>
                    </Link>
                    .
                </p>
                <ContactForm />
            </div>
        </SideImageLayout>
    );
}