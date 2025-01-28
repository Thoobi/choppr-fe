"use client"
import ToggleSwitch from "../ui/ToggleSwitch";
import { FaRegCircleQuestion } from "react-icons/fa6";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { LinkForm } from "./LinkForm";
import { useHeroStore } from "@/store/app.store";

export const Hero = () => {
    
    const {isEnabled, setIsEnabled} = useHeroStore()
    return (
        <div className="mx-auto w-fit mt-[130px]">
            <h1 className="bg-[radial-gradient(#EB568E_0%,#144EE3_100%)] bg-clip-text text-transparent text-[60px]/[80px] font-extrabold">Shorten Your Loooong Links :&#41;</h1>
            <p className="text-base font-light text-[#C9CED6] mt-5 text-center">Choppr is an efficient and easy-to-use URL shortening service that streamlines your online experience.</p>

            <LinkForm />

            <ToggleSwitch isEnabled={isEnabled} onToggle={setIsEnabled} label="Auto Paste from Clipboard " />
            {
                localStorage.getItem("ctn") ? (
                    <div></div>
                ) : (
                    <div className="flex items-center gap-2 justify-center mb-10">
                <p className="font-light text-[14px] text-[#C9CED6] text-center">You can create <span className="text-[#EB568E] font-bold">05</span> more links. Register  Now to enjoy Unlimited usage</p>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <FaRegCircleQuestion fill="white" />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Chief please sign up </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
                )
            }
            
        </div>
    );
}