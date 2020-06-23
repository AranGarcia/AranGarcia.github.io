window.onload = function () {
    document.getElementById("chat-input").addEventListener(
        // Allow messages to be sent when pressing ENTER
        "keypress", function (event) {
            if (event.keyCode == 13) {
                prepareMessage();
            }
        }
    );
}

// Date format constant variables
const options = {
    hour: '2-digit', minute: '2-digit'
};
const dateTimeFmt = new Intl.DateTimeFormat('es-MX', options).format;

function prepareMessage() {
    element = document.getElementById("chat-input");
    text = element.value;
    createChatBubble(text);
    element.value = "";
}

function createChatBubble(textInput) {
    var messagesContainer = document.getElementById("chat-messages");

    // The chat bubble
    var newMessageDiv = document.createElement("div");
    newMessageDiv.className = "chat-bubble"

    // Avatar icon
    var avatarIcon = document.createElement("img");
    avatarIcon.src = "img/avatar.png"

    // Text element
    var textMessageP = document.createElement("p");
    textMessageP.innerHTML = textInput;

    // Time element
    var date = new Date();
    var timeSpan = document.createElement("span")
    timeSpan.className = "time-right"
    timeSpan.innerHTML = dateTimeFmt(date);

    newMessageDiv.appendChild(textMessageP);
    newMessageDiv.appendChild(avatarIcon);
    newMessageDiv.appendChild(timeSpan);
    messagesContainer.appendChild(newMessageDiv);
}