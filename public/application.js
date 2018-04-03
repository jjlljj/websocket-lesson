const socket = io()

socket.on('connect', () => {
  console.log('you have connected')
})

socket.on('message', message => {
  console.log('something came along on the "message" channel', message)
  addMessage(message)
  socket.send({
    username: 'bob loblaw',
    text: 'check out law blog'
  })
})

window.addEventListener('keyup', () => {
  socket.emit('panda', {name: 'test'})
})

const addMessage = message => {
  const messages = document.querySelector('.messages')
  const newMessage = document.createElement('div')
  newMessage.innerHTML = `
    <h2>something came along on the "message" channel</h2>
    <p>${message}</p>
    `
  messages.appendChild(newMessage)
}
