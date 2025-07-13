import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className="flex justify-center items-center min-h-[200px] bg-gray-100">
  <div className="bg-gray-800 text-white text-2xl md:text-3xl px-6 py-4 rounded-lg shadow-md w-full max-w-md text-center">
    User: {userid}
  </div>
</div>

    )
}

export default User