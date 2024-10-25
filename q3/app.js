
const readline = require('readline');
const chatbot = require('./chatbot');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Library Chatbot: Welcome! Ask me anything about the library (type 'exit' to quit)");

function askQuestion() {
    rl.question("> ", (input) => {
        if (input.toLowerCase() === "exit") {
            console.log("Library Chatbot: Goodbye!");
            rl.close();
        } else {
            
            const response = chatbot.getResponse(input);
            console.log("Library Chatbot:", response);
            askQuestion();
        }
    });
}


askQuestion();
