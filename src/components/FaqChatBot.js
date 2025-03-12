import React, { useState, useEffect } from "react";
import "../css/FaqChatBot.css";
import { FaRobot, FaTimes } from "react-icons/fa";

// ✅ Define FAQs only once
const faqData = [
  { pattern: /(cancel|order cancellation|cancel my order)/i, response: "To cancel your order, please visit your account or contact support." },
  { pattern: /(track|tracking|track my order)/i, response: "You can track your order using the tracking ID provided via email." },
  { pattern: /(refund|money back|return policy)/i, response: "Our refund process takes 5-7 business days. Please visit our refund policy page for more details." },
  { pattern: /(hi|hello|hey)/i, response: "Hi! How can I assist you today?" },
  { pattern: /(delivery time|how long|shipping duration | ship )/i, response: "Standard delivery takes 3-5 business days." },
  { pattern: /(contact support|customer service|help desk)/i, response: "You can contact our support team at support@urbandot.com." },
  { pattern: /(working hours|business hours)/i, response: "Our working hours are 9 AM - 6 PM, Monday to Saturday." }
];

// ✅ Function to match predefined responses
const detectIntent = (userInput) => {
  for (let faq of faqData) {
    if (faq.pattern.test(userInput)) {
      return faq.response;
    }
  }
  return null;
};

const FaqChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatbotMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  // ✅ Function to send user message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    // First, check for predefined FAQ response
    const faqResponse = detectIntent(input);
    if (faqResponse) {
      const botMessage = { role: "bot", content: faqResponse };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      // If no match, call backend AI
      try {
        const response = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        });

        const data = await response.json();
        const botMessage = { role: "bot", content: data.response };

        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error:", error);
        const botMessage = { role: "bot", content: "I'm having trouble responding. Please try again later." };
        setMessages((prev) => [...prev, botMessage]);
      }
    }

    setInput(""); // Clear input field
  };

  return (
    <>
      {!isChatOpen && (
        <div className="chatbot-icon" onClick={() => setIsChatOpen(true)}>
          <FaRobot size={30} /> <span>Ask Me</span>
        </div>
      )}

      {isChatOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            🤖 AI Courier Chatbot
            <FaTimes className="close-btn" onClick={() => setIsChatOpen(false)} />
          </div>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <p key={index} className={msg.role === "user" ? "user-message" : "bot-message"}>
                {msg.content}
              </p>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqChatBot;
