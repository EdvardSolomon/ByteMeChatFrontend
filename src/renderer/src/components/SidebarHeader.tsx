import React, { useState } from 'react'
import { updateUserAttributes, type UpdateUserAttributesOutput } from 'aws-amplify/auth'

export const SidebarHeader: React.FC<{
  user: { family_name: string; given_name: string }
  signOut: () => void
}> = ({ user, signOut }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleUpdateUserAttribute = async () => {
    try {
      const output = await updateUserAttributes({
        userAttributes: {
          family_name: 'Solomon',
          given_name: 'Edvard'
        }
      })
      alert('User attributes updated successfully')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleSidebar}>
          <img
            className="h-10 w-10 rounded-full bg-gray-600"
            src="/path-to-avatar.jpg"
            alt="User"
          />
          <span>{`${user.given_name} ${user.family_name}`}</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="p-2 rounded hover:bg-gray-700 cursor-pointer">➕</div>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg p-4 transition-transform transform translate-x-0">
          <button onClick={toggleSidebar} className="absolute top-2 right-2">
            ✖
          </button>
          <div className="mt-10">
            <ul>
              <li
                className="p-2 hover:bg-gray-700 cursor-pointer"
                onClick={handleUpdateUserAttribute}
              >
                Edit profile
              </li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={signOut}>
                Log out
              </li>
            </ul>
          </div>
        </div>
      )}
      {!isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-gray-800 shadow-lg p-4 transition-transform transform translate-x-full">
          <button onClick={toggleSidebar} className="absolute top-2 right-2">
            ✖
          </button>
          <div className="mt-10">
            <ul>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">Option 1</li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">Option 2</li>
              <li className="p-2 hover:bg-gray-700 cursor-pointer">Option 3</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
