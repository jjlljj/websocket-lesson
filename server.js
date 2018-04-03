const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)

const path = require('path')

app.use(express.static('public'))

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

io.on('connection', socket => {
  console.log('Someone has connected')
  socket.emit('message', `A new user, ${Date.now()}, has connected`)

  socket.on('message', message => {
    console.log(`the new user's name is ${message.username}, and their message is ${message.text}`)
  })

  socket.on('panda', panda => {
    console.log(`the panda's name is ${panda.name}`)
  })

  socket.on('disconnect', () => {
    console.log('a user has disconnected')
  })
})

http.listen(process.env.PORT || 3000, function(){
  console.log('Your server is up and running on Port 3000. Good job!')
});
