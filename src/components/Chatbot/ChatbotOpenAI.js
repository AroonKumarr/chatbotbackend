import React, { useEffect, useState } from "react";
import { getDocument } from "pdfjs-dist";
import "./Chatbot.css";

function ChatbotOpenAI() {
  const [pdfText, setPdfText] = useState("");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = getDocument("/Chatbot_QA_Sample.pdf");
        const pdf = await loadingTask.promise;

        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const content = await page.getTextContent();
          text += content.items.map((item) => item.str).join(" ") + "\n";
        }

        setPdfText(text);
      } catch (error) {
        console.error("Failed to load PDF:", error);
      }
    };

    loadPDF();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setInput("");

    console.log("Sending to backend...");
console.log("Request body:", { question: input });

try {
  const res = await fetch("https://aroon.pythonanywhere.com/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question: input }),
  });

  console.log("Received response:", res);

  const data = await res.json();
  console.log("Parsed data:", data);

      setMessages((prev) => [...prev, { sender: "bot", text: data.answer }]);
    } catch (err) {
      console.error("API Error:", err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Sorry, something went wrong." },
      ]);
    }
  };

  return (
    <div className="chatbot-container">
      <h2>Chat with PDF</h2>
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
          placeholder="Ask something..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotOpenAI;
