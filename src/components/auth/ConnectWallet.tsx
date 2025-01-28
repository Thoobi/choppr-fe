// ignore this for now

"use client"

import { useConnect } from "@/utils/wallet";

export default function ConnectWallet () {
    const {authenticate} = useConnect();
    return (
        <button onClick={() => { authenticate() }} className="hover:drop-shadow-[10px_9px_22px_rgba(20,78,227,0.38)] px-24 h-[50px] rounded-lg w-fit text-white text-base font-semibold bg-[#181E29] border-[#353C4A]">Sign in with wallet</button>
    );
}