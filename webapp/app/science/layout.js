import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { scienceTabs } from './scienceTabs';

export default function ScienceLayout({ children }) {
    return (
        <SubMenuLayout pagesData={scienceTabs}>{children}</SubMenuLayout>
    );
}

