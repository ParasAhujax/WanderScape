import Introduction from "@/components/LandingPage/Introduction";
import { LandingPageNavbar } from "@/components/LandingPage/Navbar";
import { AppleCardsCarouselDemo } from "@/components/LandingPage/Carousel";
import { HeroScrollDemo } from "@/components/LandingPage/About";
import Intro from "@/components/LandingPage/intro";
export default function Home() {
  return (
    <div className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between">
      <LandingPageNavbar className="absolute" />
      {/* <Introduction className="pb-20"/> */}
      <div className="h-screen bg-white">
        <Intro />
      </div>
      <AppleCardsCarouselDemo className="ml-[5vw] w-[95vw] rounded-l-3xl shadow-lg" />
      <HeroScrollDemo />
    </div>
  );
}