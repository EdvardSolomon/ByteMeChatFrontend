import { combineReducers, createStore } from 'redux'
import { ChatActionTypes, ChatState, LOAD_CHATS, SEND_MESSAGE, SET_ACTIVE_CHAT } from './types'
import { chats } from '../components/ChatData'

// Редьюсер для управления активным чатом
const activeChatReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CHAT':
      return action.payload
    default:
      return state
  }
}

const initialState: ChatState = {
  activeChat: '',
  chats: chats // Использование замоканных данных
}
export function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case SET_ACTIVE_CHAT:
      return {
        ...state,
        activeChat: action.payload
      }
    case LOAD_CHATS:
      return {
        ...state,
        chats: action.payload
      }
    default:
      return state
    case SEND_MESSAGE:
      return {
        ...state,
        chats: state.chats.map((chat) => {
          if (chat.id === action.payload.chatId) {
            return { ...chat, messages: [...chat.messages, action.payload.message] }
          }
          return chat
        })
      }
  }
}

const initialAuthState = {
  isAuthenticated: false
}

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true }
    case 'LOGOUT':
      return { ...state, isAuthenticated: false }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  chat: chatReducer,
  auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
