import React,{useState,useEffect} from 'react'

const Ready = () => {
    // const [rotate, setRotate] = useState(0)

    //     useEffect(() => {
    //         window.addEventListener("mousemove", (e) => {
    //             let mouseX = e.clientX
    //             let mouseY = e.clientY

    //             let deltaX = mouseX - window.innerWidth / 2
    //             let deltaY = mouseY - window.innerHeight / 2

    //             var angle = Math.atan2(deltaX, deltaY) * (180 / Math.PI)
    //             setRotate(angle-deltaY)
    //         })
    //     })

    return (
        <div data-scroll  className='w-full min-h-screen bg-[#cdea68] relative'>
            <div className='text-[14vw] uppercase tracking-tighter leading-none flex justify-center items-center flex-col py-[10vw]  font-["Neue_Montreal"] font-[1000] text-[#212121] '>
                <div>
                    ready
                </div>
                <div>
                    to start
                </div>
                <div>
                    the project
                </div>

            </div>

            {/* <div className="eyes w-[35vw]  absolute top-1/4 left-1/2 transform -translate-x-[50%] -translate-y-[50%] ">
                <div className=' flex gap-6 justify-center'>
                    <div className='w-[14vw] h-[14vw] bg-white rounded-full relative'>
                        <div className="black w-[65%] h-[65%] bg-[#212121] rounded-full absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]">
                            <div className="inner w-full h-5  absolute top-[45%] " style={{ transform: `rotate(${rotate}deg)` }}>
                                <div className="eyen w-5 h-5 bg-white rounded-full">

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='w-[14vw] h-[14vw] bg-white rounded-full relative'>
                        <div className="black w-[65%] h-[65%] bg-[#212121] rounded-full absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[50%]"></div>

                    </div>


                </div>

            </div> */}

        </div>
    )
}

export default Ready
