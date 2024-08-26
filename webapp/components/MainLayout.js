"use client";

import { usePathname } from 'next/navigation';
import useStore from '@/store/useStore';

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';
import MenuLayout from '@/components/menu/MenuLayout';

export default function MainLayout({ children }) {
    const { darkMode } = useStore();
    const pathname = usePathname();

    return (
        <div id="main-container" className={!darkMode && "light"}>
            <div className='z-50 hidden md:block absolute md:top-[calc(var(--primary-menu-height)_/_2_-6px)] md:right-[50px]'>  
                <ThemeSwitch />
            </div>
            {
                pathname === '/' ?
                <>{children}</>
                :
                <MenuLayout>{children}</MenuLayout>
            }
        </div>
    ) 
}