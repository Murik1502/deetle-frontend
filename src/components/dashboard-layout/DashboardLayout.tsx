import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";

export default function DashboardLayout({ children }: { children: PropsWithChildren<any> }) {
    return (
        <div className=" grid min-h-screen 2xl:grid-cols-[1.1fr_6fr] grid-cols-[0.9fr_6fr]">
            <Sidebar />
            <main className="p-6 pb-20 overflow-x-hidden max-h-screen relative">
                <Header />
                {children}
            </main>
        </div>
    )
}