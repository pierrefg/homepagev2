"use client";

import Landing from '../components/Landing';
import MenuWithPage from '../components/menu/MenuWithPage';

import { usePathname } from 'next/navigation';

export default function LayoutSelector({ children }) {
    const pathname = usePathname();

    if (pathname === '/') {
        return (
            <Landing />
        )
    } else {
        return (
            <MenuWithPage>{children}</MenuWithPage>
        ) 
    }   
}