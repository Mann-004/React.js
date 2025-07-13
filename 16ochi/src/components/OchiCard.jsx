import React from 'react'

const OchiCard = () => {
    return (
        <div className='w-full bg-[##f1f1f1] px-10 py-20 h-screen'>
            <div className="container w-full h-full grid grid-cols-4 gap-4">
                <div className='bg-[#004d43]  col-span-2 rounded-2xl  h-[85%] relative'
                >
                     <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt=""
                     className='absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] h-[5vw]' />

                </div>
                <div className='bg-[#212121]  rounded-2xl  h-[85%] relative'>
                     <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt=""
                     className='absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] h-[8vw]' />
                </div>
                <div className='bg-[#212121]  rounded-2xl  h-[85%] relative'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt=""
                     className='absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%] h-[10vw]' />
                </div>
            </div>


        </div>
    )
}

export default OchiCard
