import { SEND_MESSAGE, SendMessageAction } from './types'

const generateMessageId = () => `msg-${new Date().getTime()}`

export const sendMessage = (chatId: string, text: string): SendMessageAction => {
  return {
    type: SEND_MESSAGE,
    payload: {
      chatId,
      message: {
        id: generateMessageId(),
        text,
        timestamp: new Date().toISOString(), // Используйте более подходящий формат даты/времени
        isOwn: true
      }
    }
  }
}
