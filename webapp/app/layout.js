import "./globals.css";
import LayoutSelector from "./LayoutSelector";

export const metadata = {
    title: "Pierre FG",
    description: "Je suis scientifique des données mais également graphiste et photographe. Viens découvrir mon site pour voir ce que je fais !",
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
        description: "Je suis scientifique des données mais également graphiste et photographe. Viens découvrir mon site pour voir ce que je fais !",
        url: "https://www.pierrefg.github.io",
        siteName: "Pierre Faure--Giovagnoli",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='font-mono'>
                <LayoutSelector>{children}</LayoutSelector>
            </body>
        </html>
    );
}
