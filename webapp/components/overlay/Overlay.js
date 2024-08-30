import { IoCloseSharp } from "react-icons/io5";

export default function Overlay({ children, onClose }) {
    return (
        <div 
            className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-between z-50 bg-opacity-80 cursor-pointer"
            onClick={onClose}
        >
            <div className="w-full flex justify-end">
                <IoCloseSharp 
                    className='btn-secondary text-4xl m-4'
                    onClick={onClose}
                />
            </div>
            <div className="flex-grow mx-auto">
                { children }
            </div>
        </div>
    );
}
