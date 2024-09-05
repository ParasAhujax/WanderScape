import { Dashboard, GlobalSidebar } from "@/components/Global/Sidebar";

export default function DashboardPage() {
    return (
        <>
            <GlobalSidebar/>
            <div className="ml-[60px]">
                <Dashboard/>
            </div>
        </>
    )
}