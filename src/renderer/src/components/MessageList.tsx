import { MessageItem } from "./MessageItem";
interface MessageListProps {
  messages: {
    id: string;
    text: string;
    timestamp: string;
    isOwn: boolean;
  }[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <div className="flex flex-col space-y-2 p-4">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
};
