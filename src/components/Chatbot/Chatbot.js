import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("https://replit.com/@neevlevel/chatbot-backend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const botReply = { sender: "bot", text: data.answer };
      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("Backend Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <>
      {/* Toggle button */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Chatbot UI */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbox">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
