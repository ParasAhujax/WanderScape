const Message = require('../models/message')


function sendMessage(io) {
    const activeUsers = new Map();

    io.on("connection", (socket) => {
        socket.on('set-user', (currUserId, otherUserId) => {
            // console.log("userId: ", currUserId, ", otherUserId: ", otherUserId);

            activeUsers.set(currUserId, socket.id);
            var user = activeUsers.get(socket.id);
            
            socket.on('private-message', async(currUserId, otherUserId, message) => {
                const currSocketId = activeUsers.get(currUserId);
                const otherSocketId = activeUsers.get(otherUserId);
                io.to(otherSocketId).to(currSocketId).emit('message', otherUserId, currUserId, message);

                await Message.create({
                    sender: currUserId,
                    recipient: otherUserId,
                    message:message
                })
            });
        });

        socket.on("disconnect", () => {
            var user = activeUsers.get(socket.id);
            activeUsers.delete(socket.id);
        });
    });
}

module.exports = sendMessage;
