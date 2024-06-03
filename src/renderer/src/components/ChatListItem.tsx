import { Chat } from "../redux/types";

interface ChatListItemProps {
    chat: Chat;
    isActive: boolean;
    onSelectChat: (chatId: string) => void;
    getUserAvatar: (userId: string) => string;
  }
  
  export const ChatListItem: React.FC<ChatListItemProps> = ({
    chat,
    isActive,
    onSelectChat,
    getUserAvatar,
  }) => {
    // Обработчик клика по элементу списка
    const handleClick = () => {
      onSelectChat(chat.id);
    };
  
    return (
      <div
        className={`flex items-center p-3 border-b border-gray-700 hover:bg-gray-800 cursor-pointer ${isActive ? 'bg-gray-800' : ''}`}
        onClick={handleClick} // Добавляем обработчик сюда
      >
        <img className="h-8 w-8 rounded-full" src={getUserAvatar(chat.id)} alt={chat.name} />
        <div className="ml-4">
          <div className="font-medium">{chat.name}</div>
          <div className="text-sm text-gray-400">{chat.messages[chat.messages.length - 1].text}</div>
          {/* Вы можете добавить последнее сообщение или другие данные чата здесь */}
        </div>
      </div>
    );
  };
