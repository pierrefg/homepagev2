import Portrait from "./Portrait";
import MenuBar from './menu/MenuBar';
import SocialIcons from './SocialIcons'
import Copyright from "./Copyright";

import Snake from "./Snake";

import { IoPinOutline } from "react-icons/io5";

export default function Landing() {
    return (
        <>
            <Snake color = "purple" />
            <Snake color = "blue" />
            {/* <Snake color = "yellow" /> */}
            <div className="h-screen flex flex-col justify-between">
                <div className="flex flex-col gap-6 justify-center items-center flex-grow my-6">
                    <div className="flex flex-col items-center gap-4 ">
                        <div className="flex">
                            <Portrait />
                        </div>
                        <div className="flex text-center">
                            <h1 className="text-2xl">Pierre Faure--Giovagnoli</h1>
                        </div>
                        {/* <div className="flex text-center">
                            <IoPinOutline className="icon" /> <h1 className="text-1xl">Lyon</h1>
                        </div> */}
                    </div>
                    <MenuBar />
                    <SocialIcons />
                </div>
                <Copyright />
            </div>
        </>
    ) 
}