async function sendMessage() {
    const input = document.getElementById("chat-input").value;
    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
    });
    const data = await response.json();
    showRoutes(data.routes);
}
