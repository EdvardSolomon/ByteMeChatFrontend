export const ChatHeader: React.FC<{
    name: string; // Имя чата
    lastActivity: string; // Информация о последней активности
  }> = ({ name, lastActivity }) => {
    return (
      <div className="flex items-center justify-between p-4 bg-chatDark border-b border-gray-700">
        <div>
          <h1 className="text-lg font-semibold text-white">{name}</h1>
          <p className="text-sm text-gray-400">{lastActivity}</p>
        </div>
        <div className="flex items-center">
          {/* Сюда можно добавить иконки или кнопки действий для чата */}
          <button className="text-gray-500 hover:text-white p-2">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              {/* Иконка поиска или другого действия */}
              <path d="M..." />
            </svg>
          </button>
          {/* Дополнительные кнопки/иконки */}
        </div>
      </div>
    );
  };
