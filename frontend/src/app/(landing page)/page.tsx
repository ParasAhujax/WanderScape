import Introduction from "@/components/LandingPage/Introduction";
import { LandingPageNavbar } from "@/components/LandingPage/Navbar";
import { AppleCardsCarouselDemo } from "@/components/LandingPage/Carousel";
import { HeroScrollDemo } from "@/components/LandingPage/About";

export default function Home() {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between p-24">
      <LandingPageNavbar className="absolute" />
      <Introduction className="pb-20"/>
      <AppleCardsCarouselDemo className="ml-[5vw] w-[95vw] rounded-l-3xl shadow-lg"/>
      <HeroScrollDemo />
    </div>
  );
}