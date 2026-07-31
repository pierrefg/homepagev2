import './style.css';

import useStore from '@/store/useStore';

import MenuBar from "./MenuBar";
import Footer from "../Footer";

import ThemeSwitch from '@/components/themeSwitch/ThemeSwitch';

export default function MenuLayout({ children }) {
    const { menuOpen, switchMenu } = useStore();

    return (
        <div className='flex flex-col min-h-screen'>
            <div className="z-30">
                <MenuBar />
            </div>

            <div
                className={`menu-content flex-1 flex flex-col ${menuOpen ? "opacity-40" : ""}`}
                onClick={menuOpen ? switchMenu : null}
            >
                {children}
            </div>

            <div className={`mt-auto pt-8 ${menuOpen ? "opacity-40" : ""}`}>
                <Footer />
            </div>
        </div>
    );
}
