import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sendMessage } from "../redux/chatActions";

export const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState('');
  const dispatch = useDispatch();
  const activeChatId = useSelector((state: RootState) => state.chat.activeChat);

  const handleSendMessage = () => {
    if (messageText.trim() === '') return; // Предотвращение отправки пустых сообщений
    dispatch(sendMessage(activeChatId, messageText));
    setMessageText(''); // Очистка поля ввода после отправки
  };

  // Обработчик для отслеживания нажатия Enter
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="relative bottom-0 left-0 right-0 p-4 bg-chatDark border-t border-gray-700">
      <div className="relative flex items-center">
        <input
          className="w-full pl-12 pr-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none"
          placeholder="Написать сообщение..."
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={handleKeyDown} // Добавлен обработчик нажатия клавиш
        />
        <button onClick={handleSendMessage} className="ml-2 text-white">Отправить</button>
      </div>
    </div>
  );
};
