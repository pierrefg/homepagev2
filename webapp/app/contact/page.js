import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { contactSections } from './contactSections';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Contact",
    "Contactez-moi pour toute question, collaboration ou demande d'information.",
    "/contact"
)

import ContactHeader from "./header/contactHeader";

export default function Contact() {
    return (
        <div className='mt-8'>
            <ContactHeader />
            <SubMenuLayout noMenu pagesData={contactSections} />
        </div>
    );
}
