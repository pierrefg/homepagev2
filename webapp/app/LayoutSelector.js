"use client";

import MenuWithPage from '@/components/menu/MenuWithPage';

import { usePathname } from 'next/navigation';

export default function LayoutSelector({ children }) {
    const pathname = usePathname();

    if (pathname === '/') {
        return (
            <>
                {children}
            </>
        )
    } else {
        return (
            <MenuWithPage>{children}</MenuWithPage>
        ) 
    }   
}