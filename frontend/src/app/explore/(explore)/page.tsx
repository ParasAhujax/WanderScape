import { ScrollCards } from "@/components/Explore/ExploreScrollCards";
import Breadcrumb from "@/components/Global/Breadcrumb";
import { Dashboard, GlobalSidebar } from "@/components/Global/Sidebar";

export default function Explore() {
    return (
        <div className="ml-[60px] h-screen overflow-y-auto">
            <GlobalSidebar />

            <ScrollCards className="bg-transparent "/>
        </div>
    
    )
}