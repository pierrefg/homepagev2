import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { contactTabs } from './contactTabs';

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Contact",
    "Contactez-moi pour toute question, collaboration ou demande d'information.",
    "/contact"
)

export default function ContactLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={contactTabs}>{children}</SubMenuLayout>
        </>
    );
}

