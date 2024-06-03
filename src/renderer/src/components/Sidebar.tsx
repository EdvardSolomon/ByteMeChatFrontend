import { ChatList } from './ChatList'
import { SearchComponent } from './SearchComponent'
import { SidebarHeader } from './SidebarHeader'
import { getUserAvatar } from './ChatData'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const Sidebar = ({ user, signOut }) => {
  const dispatch = useDispatch()
  const activeChat = useSelector((state: RootState) => state.chat.activeChat)
  const chats = useSelector((state: RootState) => state.chat.chats)

  const handleChatSelect = (chatId) => {
    dispatch({ type: 'SET_ACTIVE_CHAT', payload: chatId })
  }

  return (
    <div className="flex flex-col h-screen bg-chatDark text-white">
      <SidebarHeader user={user} signOut={signOut} />
      <div className="p-4">
        <SearchComponent />
      </div>
      <ChatList
        chats={chats}
        activeChatId={activeChat}
        onSelectChat={handleChatSelect}
        getUserAvatar={getUserAvatar}
      />
    </div>
  )
}
