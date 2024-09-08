import React from 'react'
import Image from 'next/image'
const Welcome = () => {
    return (
        <div className='bg-white h-full rounded-b-[110px]'>
            <div className='relative top-[10vh] left-[15vh] w-[600px]'>
                <p className="tracking-tighter font-semibold text-[120px] w-[800px] ">Welcome </p>
                <p className="tracking-tighter font-semibold text-[120px] w-[800px] mt-[-7vh]">Home </p>
                <p className='font-mono text-[20px] mt-[5vh]'>Wanderscape is a dynamic social media platform designed for travelers to connect, share, and discover new experiences across the globe.  Wanderscape transforms travel into a shared experience. Discover new places, plan your next adventure, and immerse yourself in a global community of travelers with Wanderscape.</p>
            </div>
            <Image
                src="https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt='logo'
                height={200}
                width={450}
                className='relative left-[110vh] top-[-60vh] rounded-tl-[500px] rounded-br-[100px]' />
        </div>
    )
}

export default Welcome
