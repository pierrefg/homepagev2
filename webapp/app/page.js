import Portrait from "@/components/Portrait";
import MenuBar from '@/components/menu/MenuBar';
import SocialIcons from '@/components/SocialIcons'
import Copyright from "@/components/Copyright";
import Snake from "@/components/Snake";

export default function Landing() {
    return (
        <>
            <Snake color = "purple" />
            <Snake color = "blue" />
            <div className="h-screen flex flex-col justify-between">
                <div className="flex flex-col gap-6 justify-center items-center flex-grow my-6">
                    <div className="flex flex-col items-center gap-4 ">
                        <div className="flex">
                            <Portrait />
                        </div>
                        <div className="flex flex-col gap-1 text-center justify-center items-center w-full">
                            <div className="w-full">
                                <h1 className="text-2xl">Pierre Faure--Giovagnoli</h1>
                            </div>
                            <div className="w-full">
                                <span>
                                    <a 
                                        href="mailto: contact@pierrefg.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        contact@pierrefg.com 
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <MenuBar />
                    <SocialIcons />
                </div>
                <Copyright />
            </div>
        </>
    ) 
}