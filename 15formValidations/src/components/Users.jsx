import React from 'react'

const Users = ({user}) => {
  return (
    <>
    {user.length > 0 && (
        <div className="mt-6 bg-gray-100 p-4 rounded-xl">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Submitted Users:</h3>
          <ul className="space-y-2">
            {user.map((user, index) => (
              <li key={index} className="border p-2 rounded bg-white shadow-sm">
                <p><strong>Name:</strong> {user.fullname}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      
    </>
  )
}

export default Users
