import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { contactTabs } from './contactTabs';

export default function ContactLayout({ children }) {
    return (
        <>
            <SubMenuLayout pagesData={contactTabs}>{children}</SubMenuLayout>
        </>
    );
}

