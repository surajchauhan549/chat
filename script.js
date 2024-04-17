// script.js

document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");

    sendButton.addEventListener("click", function() {
        const message = messageInput.value.trim();
        if (message !== "") {
            appendMessage("You", message);
            // Simulate bot response (replace with actual AI logic)
            setTimeout(() => {
                appendMessage("AI", "This is a dummy response.");
            }, 500);
            messageInput.value = "";
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("mb-2");
        messageElement.innerHTML = `
            <strong>${sender}:</strong>
            <span>${text}</span>
        `;
        chatMessages.appendChild(messageElement);
        // Scroll to bottom of chat messages
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});
