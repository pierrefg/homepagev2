import MenuBar from "./MenuBar";
import Copyright from "../Copyright";

import './style.css';

export default function MenuLayout({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen w-full'>
            <div className="flex z-30">
                <MenuBar />
            </div>
            <div className="pfg-tab flex-1 mt-[90px] max-w-7xl w-full mx-auto">
                {children}
            </div>
            <div className="flex">
                <Copyright />
            </div>
        </div>
        
    )
}