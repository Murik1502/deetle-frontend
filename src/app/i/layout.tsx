import DashboardLayout from "@/components/dashboard-layout/DashboardLayout";
import { PropsWithChildren } from "react";

export default function Layout({ children }: { children: PropsWithChildren<any> }) {
    return <DashboardLayout>{children}</DashboardLayout>
}