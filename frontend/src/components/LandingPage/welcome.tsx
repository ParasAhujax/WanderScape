import React from 'react'
import Image from 'next/image'
const Welcome = () => {
    return (
        <div className='bg-white h-full rounded-b-[110px]'>
            <div className='relative top-[10vh] left-[4vh] w-[600px]'>
                <p className="tracking-tighter font-semibold text-[120px] w-[800px] ">Welcome Home</p>
            </div>
            <Image
                src="https://images.pexels.com/photos/1011093/pexels-photo-1011093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt='logo'
                height={200}
                width={450}
                className='relative left-[110vh] top-[-40vh] rounded-tl-[500px] rounded-br-[100px]' />
        </div>
    )
}

export default Welcome
