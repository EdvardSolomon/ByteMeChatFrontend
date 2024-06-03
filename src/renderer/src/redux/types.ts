export interface ChatState {
  activeChat: string // Идентификатор активного чата
  chats: Chat[]
}

export interface Chat {
  id: string
  name: string
  messages: { id: string; text: string; timestamp: string; isOwn: boolean }[]
}

// Действия
export const SET_ACTIVE_CHAT = 'SET_ACTIVE_CHAT'

export interface SetActiveChatAction {
  type: typeof SET_ACTIVE_CHAT
  payload: string
}

export const LOAD_CHATS = 'LOAD_CHATS'

interface LoadChatsAction {
  type: typeof LOAD_CHATS
  payload: ChatState['chats'] // Используем тип из ChatState для payload
}

export const SEND_MESSAGE = 'SEND_MESSAGE'

export interface SendMessageAction {
  type: typeof SEND_MESSAGE
  payload: {
    chatId: string
    message: {
      id: string // Уникальный идентификатор сообщения
      text: string
      timestamp: string
      isOwn: boolean
    }
  }
}

// Экспортируем типы действий
export type ChatActionTypes = SetActiveChatAction | LoadChatsAction | SendMessageAction
