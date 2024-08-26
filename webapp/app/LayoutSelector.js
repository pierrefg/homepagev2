"use client";

import React, { useState } from 'react';

import MenuLayout from '@/components/menu/MenuLayout';
import ThemeSwitch from "@/components/themeSwitch/ThemeSwitch";

import { usePathname } from 'next/navigation';

export default function LayoutSelector({ children }) {
    const pathname = usePathname();
    const [themeClass, setThemeClass] = useState(false);

    const refreshTheme = (x) => {
        if(x) {
            setThemeClass('')
        } else {
            setThemeClass('light')
        }
    }

    return (
        <div id="main-container" className={`${themeClass}`}>
            <ThemeSwitch refreshTheme={refreshTheme} />
            {
                pathname === '/' ?
                <>{children}</>
                :
                <MenuLayout>{children}</MenuLayout>
            }
        </div>
    ) 
}