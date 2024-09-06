import React from 'react'
import Image from "next/image";

const Intro = () => {
    return (
        <>
            <Image
                src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="logo"
                width={500}
                height={400}
                className=" h-[95vh] w-screen rounded-b-[110px]"
            />
        </>
    )
}

export default Intro
