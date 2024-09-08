"use client";

import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from "next/image";

// Import images statically
import logo from "../../../public/dark theme logo.png";
import cover1 from "../../../public/pexels-asadphoto-1450353.jpg";
import cover2 from "../../../public/pexels-asadphoto-3601426.jpg";
import cover3 from "../../../public/pexels-mrudula-thakur-256463-784879.jpg"; // Add more images as needed
import cover4 from "../../../public/pexels-travelwithanvish-14477905.jpg"; // Add more images as needed
import cover5 from "../../../public/pexels-chee-huey-wong-12792-62348.jpg"; // Add more images as needed

// Array of image paths
const images: StaticImageData[] = [cover1, cover2, cover3, cover4, cover5]; // Add more images to this array

const Intro: React.FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Image
                src={logo}
                alt=''
                width={140}
                className='relative z-50 top-10 left-14 bg-black rounded-full'
            />
            <Image
                src={images[currentImageIndex].src} // Extract the src property
                alt="logo"
                width={500}
                height={400}
                className="h-[95vh] w-screen rounded-b-[110px] relative top-[-10vh]"
            />
        </>
    );
};

export default Intro;