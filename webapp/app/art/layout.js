import SubMenuLayout from '@/components/subMenuLayout/SubMenuLayout';

import { artTabs } from './artTabs';

export default function ArtLayout({ children }) {
    return (
        <SubMenuLayout pagesData={artTabs}>{children}</SubMenuLayout>
    );
}

