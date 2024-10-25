
const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');
const chatbot = require('./chatbot');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static(path.join(__dirname, 'public')));


wss.on('connection', (ws) => {
    console.log("New client connected");

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        
        
        const response = chatbot.getResponse(message);
        
       
        ws.send(response);
    });

    ws.on('close', () => {
        console.log("Client disconnected");
    });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
