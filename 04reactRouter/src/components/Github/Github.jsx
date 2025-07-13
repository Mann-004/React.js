import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className="flex flex-col items-center bg-gray-700 text-white p-6 rounded-lg shadow-lg max-w-sm mx-auto my-10">
  <h2 className="text-3xl font-semibold mb-4">
    Github followers: {data.followers}
  </h2>
  <img
    src={data.avatar_url}
    alt="GitHub avatar"
    className="w-48 h-48 rounded-full object-cover border-4 border-white"
  />
</div>

  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}   