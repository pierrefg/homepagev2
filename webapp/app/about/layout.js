import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { aboutTabs } from './aboutTabs';

export default function AboutLayout({ children }) {
    return (
        <SubMenuLayout pagesData={aboutTabs}>{children}</SubMenuLayout>
    );
}

