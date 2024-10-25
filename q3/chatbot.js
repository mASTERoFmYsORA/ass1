
function getResponse(userInput) {
    userInput = userInput.toLowerCase();

   
    const responses = {
        "borrow book": "You can borrow books by providing your library card at the front desk.",
        "return book": "Books can be returned at the front desk during library hours.",
        "opening hours": "The library is open from 9 AM to 6 PM, Monday to Friday.",
        "membership": "To become a library member, please fill out the membership form at the front desk.",
        "fine policy": "Late returns incur a fine of $0.50 per day per book.",
        "default": "I'm sorry, I didn't understand that. Could you please rephrase?"
    };

   
    if (userInput.includes("borrow") && userInput.includes("book")) {
        return responses["borrow book"];
    } else if (userInput.includes("return") && userInput.includes("book")) {
        return responses["return book"];
    } else if (userInput.includes("opening hours") || userInput.includes("hours")) {
        return responses["opening hours"];
    } else if (userInput.includes("membership")) {
        return responses["membership"];
    } else if (userInput.includes("fine") || userInput.includes("late")) {
        return responses["fine policy"];
    } else {
        return responses["default"];
    }
}


module.exports = { getResponse };
