const http = require('http')

const {Server} = require("socket.io")
const app = require("./src/config/express config")
const server = http.createServer(app); //server application
require("dotenv").config()
const mongoose = require("mongoose")
const io = new Server(server, {
    cors: "*"
})

// socket is event based
//on is to listen
io.on("connection", (socket)=>{   
    socket.on("new-message", (data) =>{
        socket.emit("message-received", data)
    })
    // console.log("Socket Connected ....", socket.id   )
})


mongoose.connect(process.env.MONGO_DB_URL,{
    dbName: process.env.MONGO_DB_NAME,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() =>{
    console.log("MOngo db connected successfully...")

})
.catch((err) =>{
    console.log("error while connecting Mongodb...")
    process.exit(1)
})
// PORT = process.env.PORT
server.listen((err)=>{
    if(!err){
                console.log("server is running....")
                console.log("Press CTRL + C to disconnect Server...")
            }
   
})
// 0-65535
//~100 port
// http => 80, https: 443, sstp =>25, 2525, 465, 587
//ftp 21, sftp 22, mysql: 3306, postgres 5432, mongodb 27017
// https://ecommerce-backend-niavgvbli-manbahadurkumals-projects.vercel.app
// server.listen(9012, '127.0.0.1',(err)=>{
//     if(!err){
//         console.log("server is running....")
//         console.log("Press CTRL + C to disconnect Server...")
//     }
// })
// PORT = process.env.PORT
// server.listen((err) => {
//     if(!err){
//                 console.log("server is running....")
//                 console.log("Press CTRL + C to disconnect Server...")
//             }
// });
