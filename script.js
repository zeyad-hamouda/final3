const chatbot = document.getElementById('chatbot');
const input = chatbot.querySelector('input');
const button = chatbot.querySelector('button');

// Define the responses
const responses = {
    'what is the amount in the bank': 'Your bank balance is $5000.',
    'what are the internet, water, and electricity bills fees per month': 'Your monthly bills are: Internet: $50, Water: $30, Electricity: $100.',
    'what is the amount of the debits': 'Your debits are $1000.',
    'how much can I spend safely': 'You can safely spend $2000.'
}

// Add event listener to the send button
button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        addUserMessage(input.value);
        handleResponse(input.value.toLowerCase());
        input.value = '';
    }
});

// Handle the user input
function handleResponse(input) {
    // Check if the user input matches a response
    if (responses[input]) {
        addBotMessage(responses[input]);
    } else if (input.includes('salary') || input.includes('monthly income')) {
        addBotMessage('Your next salary will be released on the 15th of next month.');
    } else {
        addBotMessage("I'm sorry, I didn't understand that.");
    }
}

// Add user message to the chat
function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('user-message');
    messageElement.innerHTML = `
		<p>${message}</p>
	`;
    chatbot.querySelector('.chat-container').appendChild(messageElement);
}

// Add bot message to the chat
function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('bot-message');
    messageElement.innerHTML = `
		<p>${message}</p>
	`;
    chatbot.querySelector('.chat-container').appendChild(messageElement);
}
