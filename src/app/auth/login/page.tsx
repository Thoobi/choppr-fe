"use client";

import NameEmailForm from "@/components/auth/auth-form";
import ConnectWallet from "@/components/auth/ConnectWallet";
import BrandLogo from "@/components/shared/brand-logo";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";

export default function Login() {
    const {steps} = useAuthStore();

    const formSteps = () => {
        switch (steps) {
            case 1:
                return (
                    <div className="bg-[#0B101B] dashboard min-h-screen bg-center flex flex-col gap-4 items-center justify-center">
                        <BrandLogo />
                        <ConnectWallet />
                    </div>
                );
            case 2:
                return (
                <div className="bg-[#0B101B] dashboard min-h-screen bg-center flex flex-col gap-4 items-center justify-center">
                    <NameEmailForm />
                </div>
                );
            default:
                return null;
        }
    };

    return formSteps();
}
