const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const axios = require('axios');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());
app.use(express.static('public'));

async function fetchLiveScores() {
    try {
        const response = await axios.get('https://cricapi.com/api/cricket?apikey=44b8e25c-2b04-4469-98d5-2b301e071e1d');
        return response.data;
    } catch (error) {
        console.error('Error fetching live scores:', error.message);
        return [];
    }
}

setInterval(async () => {
    const scores = await fetchLiveScores();
    if (scores) {
        io.emit('liveScores', scores);
    }
}, 60000);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
