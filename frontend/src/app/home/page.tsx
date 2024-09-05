import {Dashboard, GlobalSidebar} from "@/components/Global/Sidebar";

export default function Home() {
    return (
        <>
        <GlobalSidebar/>
        <div className=" ml-[60px]">
            <Dashboard/>
        </div>
        </>
    )
}