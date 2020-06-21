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

function prepareMessage() {
    element = document.getElementById("chat-input");
    text = element.value;
    console.log("Sending", text);
    element.value = "";
}
