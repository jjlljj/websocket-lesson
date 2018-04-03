const socket = io()

socket.on('connect', () => {
  console.log('you have connected')
})

socket.on('message', message => {
  console.log('something came along on the "message" channel', message)
})
