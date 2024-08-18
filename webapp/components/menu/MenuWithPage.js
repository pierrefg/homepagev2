import FullMenuBar from "./FullMenuBar";
import Copyright from "../Copyright";

export default function MenuWithPage({ children }) {
    return (
        <div className='flex flex-col justify-between min-h-screen w-full'>
            <div className="flex">
                <FullMenuBar />
            </div>
            <div className="pfg-tab flex-1 mt-[90px] max-w-7xl w-full mx-auto bg-black p-6">
                {children}
            </div>
            <div className="flex">
                <Copyright />
            </div>
        </div>
        
    )
}