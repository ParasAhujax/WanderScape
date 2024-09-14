"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import img1 from "../../../public/assets/pexels-cottonbro-5966342.jpg"
import img2 from "../../../public/assets/pexels-plann-2999237-4549416.jpg"
import img3 from "../../../public/assets/pexels-tima-miroshnichenko-7567550.jpg"
import img4 from "../../../public/assets/pexels-n-voitkevich-7235902.jpg"
import img5 from "../../../public/assets/pexels-vivek-sakhargade-837724-12151764.jpg"
import img6 from "../../../public/assets/pexels-george-pak-7968285.jpg"

export function AppleCardsCarouselDemo({ className }: { className?: string }) {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    return (
        <div className={`w-screen relative right-[36px]  h-full py-20 bg-black ${className}`}>
            <h2 className="max-w-7xl pl-4 mx-auto text-lg md:text-5xl font-bold text-white dark:text--200 font-sans">
                Outstanding Features.
            </h2>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            {[...new Array(3).fill(1)].map((_, index) => {
                return (
                    <div
                        key={"dummy-content" + index}
                        className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
                    >
                        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                            <span className="font-bold text-neutral-700 dark:text-neutral-200">
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{" "}
                            Keep a journal, quickly jot down a grocery list, and take amazing
                            class notes. Want to convert those notes to text? No problem.
                            Langotiya jeetu ka mara hua yaar is ready to capture every
                            thought.
                        </p>
                        <Image
                            src="https://assets.aceternity.com/macbook.png"
                            alt="Macbook mockup from Aceternity UI"
                            height="500"
                            width="500"
                            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
                        />
                    </div>
                );
            })}
        </>
    );
};

const data = [
    {
        category: "Artificial Intelligence",
        title: "Smart Itinerary Builder",
        src: img1,
        content: <DummyContent />,
    },
    {
        category: "Productivity",
        title: "Connect with other travellers",
        src: img2,
        content: <DummyContent />,
    },
    {
        category: "Product",
        title: "Price Tracker",
        src: img3,
        content: <DummyContent />,
    },

    {
        category: "Product",
        title: "Maps ",
        src: img4,
        content: <DummyContent />,
    },
    {
        title: "Know Your Next Destination",
        src: img5,
        content: <DummyContent />,
    },
    {

        title: "On-Demand Travel Guide",
        src: img6,
        content: <DummyContent />,
    },
];
