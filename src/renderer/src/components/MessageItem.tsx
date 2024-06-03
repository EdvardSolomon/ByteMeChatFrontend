export const MessageItem = ({ message }) => {
    const messageClasses = message.isOwn
    ? "bg-blue-600 text-white rounded-lg px-4 py-2"
    : "bg-gray-700 text-white rounded-lg px-4 py-2";

   return (
    <div className="flex items-end space-x-2">
      <img
        src={message.avatar}
        alt="Аватар"
        className="h-8 w-8 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <div className={messageClasses}>
          <p className="text-sm">{message.text}</p>
        </div>
        <div className="text-right text-xs text-gray-400 mt-1">
          {message.timestamp}
        </div>
      </div>
    </div>
  );
};
