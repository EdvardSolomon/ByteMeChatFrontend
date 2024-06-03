import { chats } from './ChatData';
import { ChatListItem } from './ChatListItem';

// Добавляем типы для пропсов
interface ChatListProps {
    chats: typeof chats;
    activeChatId: string;
    onSelectChat: (chatId: string) => void;
    getUserAvatar: (userId: string) => string;
  }
  
  export const ChatList: React.FC<ChatListProps> = ({
    chats,
    activeChatId,
    onSelectChat,
    getUserAvatar,
  }) => {
    return (
      <div className="overflow-y-auto">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            isActive={chat.id === activeChatId}
            onSelectChat={onSelectChat}
            getUserAvatar={getUserAvatar}
          />
        ))}
      </div>
    );
  };
