"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
    return (
        <div className="flex flex-col overflow-hidden">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-4xl font-semibold text-black dark:text-black">
                            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                                ABOUT US
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src={`https://static.wixstatic.com/media/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png/v1/fill/w_980,h_560,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea6ac8_247ebd0a86cb4cb5a447048039dc0b3a~mv2.png`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
        </div>
    );
}
