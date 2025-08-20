import React, { useState, useEffect } from "react";
import "../css/FaqChatBot.css";
import { FaRobot, FaTimes } from "react-icons/fa";

// ✅ Define FAQs only once
const faqData = [
  {
    pattern: /(cancel|order cancellation|cancel my order)/i,
    response: "You can cancel your order from your account dashboard or by reaching out to our support team."
  },
  {
    pattern: /(track|tracking|track my order|where is my order)/i,
    response: "Tracking details are available in your confirmation email or account. Let me know if you need help locating it."
  },
  {
    pattern: /(return|return policy|return my package)/i,
    response: "We offer an easy return process. You can start it from your order history or contact support for guidance."
  },
  {
    pattern: /(hi|hello|hey|good morning|good evening)/i,
    response: "Hello! 👋 How can I assist you today?"
  },
  {
    pattern: /(shipping status|has my order shipped|dispatch)/i,
    response: "Once your order is shipped, you'll receive an update with tracking info. Need help checking it?"
  },
  {
    pattern: /(contact support|customer service|speak to someone|get help)/i,
    response: "You can reach our support team directly at support@urbandot.com or use the contact form on our website."
  },
  {
    pattern: /(change address|update delivery address)/i,
    response: "You can update your delivery address before the order is shipped. Check your order settings or message support."
  },
  {
    pattern: /(package damaged|item broken|received wrong item)/i,
    response: "We're here to help! Please report any issues through your order page or send us a message with a photo."
  },
  {
    pattern: /(account issues|can't login|reset password)/i,
    response: "You can reset your password from the login page. If you're still stuck, support can assist you further."
  },
  {
    pattern: /(services|what do you offer|available options)/i,
    response: "We offer couriers and cargo services for individuals and businesses. Want help choosing the right option?"
  }
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
