import { useRef, useState } from 'react'
import { motion } from 'framer-motion'


function App() {
  const [count, setCount] = useState(0)
  const scrollRef=useRef(null)

  return (
    <>

    <div className="page1 w-full h-screen bg-zinc-900 p-10">
  <motion.div
    initial={{
      x: 0,
      rotate: 0,
      borderRadius: "20px",
      backgroundColor: "#3B82F6",
      opacity: 0,
    }}
    whileInView={{
      x: 1000,
      rotate: 360,
      borderRadius: "100%",
      backgroundColor: "#EF4444",
      opacity: 1,
    }}
    viewport={{ once: false, amount: 0.5 }}
    transition={{
      duration: 3,
      ease: "easeInOut",
    }}
    className="box flex items-center justify-center w-[200px] h-[200px] rounded-lg shadow-lg"
  />
</div>

<div className="page h-screen w-full bg-gray-200 p-10" ref={scrollRef}>
  <motion.div
    initial={{
      y: 50,
      opacity: 0,
    }}
    whileInView={{
      y: 0,
      opacity: 1,
      x:300,
      
    }}
    viewport={{ root:scrollRef}}
    transition={{
      duration: 1,
      ease: "easeOut",
    }}
    className="box w-[200px] h-[200px] rounded-lg bg-green-600"
  />
</div>


<div className="page w-full h-screen p-10 bg-zinc-700">
  <motion.div
    initial={{
      x: 200,
      opacity: 0,
    }}
    whileInView={{
      x: 0,
      opacity: 1,
    }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{
      duration: 1.3,
      ease: "easeOut",
    }}
    className="box w-[200px] h-[200px] rounded-lg bg-purple-400"
  />
</div> 

{/* <div className="h-[300vh] bg-zinc-800">
  
  <div className="sticky top-0 h-screen flex items-center justify-center">
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      className="w-[200px] h-[200px] bg-blue-500 rounded-xl shadow-lg"
    />
  </div>
</div> */}


     



    </>
  )
}

export default App
