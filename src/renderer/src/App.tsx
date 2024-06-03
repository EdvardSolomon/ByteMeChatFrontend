import { Amplify } from 'aws-amplify'
import awsconfig from '../../aws-exports'
import { Sidebar } from './components/Sidebar'
import { ChatArea } from './components/ChatArea'
import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import { fetchUserAttributes } from 'aws-amplify/auth'
import { useEffect, useState } from 'react'

Amplify.configure(awsconfig)

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await fetchUserAttributes()
        setUser(userData)
      } catch (err) {
        console.log(err)
      }
    }

    fetchUser()
  }, [])

  return (
    <Authenticator>
      {({ signOut, userSession }) => (
        <main>
          <div className="flex h-screen bg-darklight">
            <Sidebar user={user} signOut={signOut} />
            <ChatArea />
          </div>
        </main>
      )}
    </Authenticator>
  )
}

export default App
