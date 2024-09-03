import "./globals.css";
import "./button.css";

import MainLayout from "@/components/mainLayout/MainLayout";
import Loader from "@/components/loader/Loader";

import React, { Suspense } from 'react';

// VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { createPageMetadata } from '@/utils/metadata';

export const metadata = createPageMetadata(
    "Accueil",
    "Scientifique des données mais également graphiste et photographe : viens découvrir ce que je fais !",
    ""
)

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className='font-mono'>
                <Analytics />
                <SpeedInsights/>
                <Suspense fallback={<Loader />}>
                    <MainLayout>{children}</MainLayout>
                </Suspense>
            </body>
        </html>
    );
}
