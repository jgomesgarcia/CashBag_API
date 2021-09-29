import { io } from "./http";

io.on('connection', (socket) => {
    console.log(`Nova Conexão: ${socket.id}`)
})
