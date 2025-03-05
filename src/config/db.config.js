require("dotenv").config()
const mongoose = require("mongoose")

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

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_DB_URL, {
//             dbName: process.env.MONGO_DB_NAME
//         });
//         console.log('MongoDB Atlas connected successfully...');
//     } catch (err) {
//         console.error('Error connecting to MongoDB Atlas:', err.message);
//         process.exit(1);
//     }
// };
// // Connect to Atlas before starting the server
// connectDB().then(() => {
//     io.on('connection', (socket) => {
//         console.log(`New client connected: ${socket.id}`);

//         // Send message history to new client
//         socket.on('get-history', async () => {
//             try {
//                 const messages = await Message.find().sort({ timestamp: -1 }).limit(50);
//                 socket.emit('message-history', messages);
//             } catch (err) {
//                 console.error('Error fetching history:', err.message);
//                 socket.emit('error', 'Failed to load history');
//             }
//         });
//     }