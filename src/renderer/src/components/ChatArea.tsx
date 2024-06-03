import { useSelector } from "react-redux";
import { ChatHeader } from "./ChatHeader";
import { MessageInput } from "./MessageInput";
import { MessageList } from "./MessageList"
import { RootState } from "../redux/store";

export const ChatArea = () => {
  const activeChatId = useSelector((state: RootState) => state.chat.activeChat);

  // Находим активный чат в списке чатов по его идентификатору
  const activeChat = useSelector((state: RootState) => 
    state.chat.chats.find(chat => chat.id === activeChatId)
  );
  
  return (
    <div className="flex flex-col flex-grow h-full bg-messageDark text-white">
      <ChatHeader 
        name={activeChat?.name || "Название чата"} 
        lastActivity="был(а) 2 минуты назад" // Замените на актуальные данные
      />
      
      <div className="flex-1 overflow-y-auto mb-16 p-4">
        <MessageList messages={activeChat?.messages || []}/>
      </div>

      <MessageInput />
    </div>
  );
};
