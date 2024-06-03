export const chats = [
  {
    id: '1',
    name: 'Alex Grudnistiy',
    messages: [
      { id: 'msg1', text: 'Привет, как дела?', timestamp: '12:45 PM', isOwn: false },
      { id: 'msg2', text: 'Привет! Все хорошо, спасибо :)', timestamp: '12:46 PM', isOwn: true }
      // ...другие сообщения
    ]
  },
  {
    id: '2',
    name: 'Мама',
    messages: [
      { id: 'msg3', text: 'Ты поел?', timestamp: '7:30 AM', isOwn: false },
      { id: 'msg4', text: 'Да, мам, все отлично!', timestamp: '7:45 AM', isOwn: true }
      // ...другие сообщения
    ]
    // ...другие чаты
  },
  {
    id: '3',
    name: 'Папа',
    messages: [
      { id: 'msg3', text: 'Как дела, сынок?', timestamp: '7:30 AM', isOwn: false },
      { id: 'msg4', text: 'Все отлично, пап!', timestamp: '7:45 AM', isOwn: true }
      // ...другие сообщения
    ]
    // ...другие чаты
  }
  // ...другие чаты
]

export const getUserAvatar = (userId) => {
  // Здесь будет логика получения аватара пользователя по его ID
  return '/path-to-avatar.jpg'
}
