import "./globals.css";
import LayoutSelector from "./LayoutSelector";

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import Head from 'next/head';

export const metadata = {
  title: "Pierre FG",
  description: "Je suis scientifique des données mais également graphiste et photographe. Viens découvrir mon site pour voir ce que je fais !",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head>
            <DefaultSeo {...SEO} />
            </Head>
            <body className='font-mono'>
                <LayoutSelector>{children}</LayoutSelector>
            </body>
        </html>
    );
}
