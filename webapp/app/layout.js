import "./globals.css";
import "./button.css";

import MainLayout from "@/components/mainLayout/MainLayout";
import Loader from "@/components/loader/Loader";

import React, { Suspense } from 'react';

// VERCEL
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    title: "Pierre FG",
    description: "Scientifique des données mais également graphiste et photographe : viens découvrir ce que je fais !",
    manifest: "/manifest.json",
    icons: {
      icon: [
        { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      ],
      apple: "/icons/apple-touch-icon.png",
    },
    openGraph: {
        title: "Pierre Faure--Giovagnoli",
        description: "Scientifique des données mais également graphiste et photographe : viens découvrir ce que je fais !",
        url: "https://www.pierrefg.com",
        siteName: "Pierre Faure--Giovagnoli",
    },
};

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
