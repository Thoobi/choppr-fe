"use client"

import { Hero } from "@/components/dashboard/Hero";
import LinkTable from "@/components/dashboard/link-table";
import { Navbar } from "@/components/dashboard/Navbar";

export default function Dashboard() {
    return (
        <div className="bg-[#0B101B] dashboard min-h-screen bg-center">
            <Navbar />
            <main>
                <Hero />
                {
                    localStorage.getItem("ctn") ? (
                        <LinkTable />
                    ) : (
                        <></>
                    )
                }
               
            </main>
        </div>
    );
}