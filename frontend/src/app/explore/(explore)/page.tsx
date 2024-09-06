import { ExploreHorizontalCards } from "@/components/Explore/ExploreHorizontalCards";
import { ScrollCards } from "@/components/Explore/ExploreScrollCards";
import Breadcrumb from "@/components/Global/Breadcrumb";
import { Dashboard, GlobalSidebar } from "@/components/Global/Sidebar";

export default function Explore() {
    return (
        <div className="ml-[60px] h-screen overflow-y-auto">
            <GlobalSidebar />

            <Breadcrumb title="Explore" className=" mt-3 size-fit p-5 z-10 bg-white rounded-r-[20px] shadow-xl"/>
            <ExploreHorizontalCards className="mt-24"/>
            <ScrollCards className="bg-transparent "/>
        </div>
    
    )
}