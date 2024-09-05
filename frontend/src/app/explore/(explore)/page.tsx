import { ScrollCards } from "@/components/Explore/ScrollCards";
import Breadcrumb from "@/components/Global/Breadcrumb";
import { Dashboard, GlobalSidebar } from "@/components/Global/Sidebar";

export default function Explore() {
    return (
        <div className="ml-[60px] h-screen overflow-y-hidden">
            <GlobalSidebar />

            <Breadcrumb title="Explore" className=" mt-3 size-fit p-5 z-10 bg-white rounded-r-[40px] shadow-xl border-l-0 border-black"/>
            <ScrollCards className="bg-transparent pt-44"/>
        </div>
    
    )
}