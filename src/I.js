// const webSocketsServerPort = 8000;
// const webSocketsServer = require('websocket').server;
// const http = require('http')
//
//
// const server = http.createServer()
// server.listen(webSocketsServerPort)
// console.log('listening on port 8000')
//
// const webServer = new webSocketsServer({
//     httpServer:server
// })
//
// const clients = {}
//
// const getUniqueID(){
//     const s4 =()=>Math.floor((1+Math.random())*0*1000).toString(16).substring(1)
//     return s4()+s4()+'-'+s4()
// }
//
// webServer.on('require', function (request){
//     var userID = getUniqueID();
//
//     const connection = request.accept(null,request.origin)
//
// })

const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

io.on('connect',(socket)=>{
    socket.on('chat message',(msg)=>{
        io.emit('chat message',msg)
    })
})

http.listen(3100,()=>{
    console.log('3100 portda lis started')
})
