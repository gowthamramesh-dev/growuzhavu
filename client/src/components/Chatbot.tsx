import { useState, useRef, useEffect, KeyboardEvent } from "react";
import axios from "axios";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

// Define the structure of each message
interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await axios.post<{ reply: string }>(
        "http://localhost:5000/bot",
        { message: input }
      );

      const botMessage: Message = {
        sender: "bot",
        text: response.data.reply,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const botMessage: Message = {
        sender: "bot",
        text: "⚠ Oops! Something went wrong. Try again later.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="fixed bottom-4 right-4 cursor-pointer bg-blue-600 p-3 rounded-full shadow-lg text-white z-50"
        onClick={() => setShowChatbot((prev) => !prev)}
      >
        💬
      </div>

      {/* Chatbot Popup */}
      {showChatbot && (
        <div className="fixed bottom-0 right-0 w-full max-w-md mx-auto h-[70vh] bg-gradient-to-b from-purple-200 to-blue-100 shadow-lg rounded-lg overflow-hidden z-50">
          <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm sticky top-0 bg-white dark:bg-neutral-950">
            <div className="flex items-center gap-2 ">
              <img src="/bot1.png" alt="Bot Logo" className="h-8 w-8 rounded-full" />
              <span className="text-lg font-semibold text-gray-700">Agri-Commerce Chatbot</span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setShowChatbot(false)}
            >
              X
            </div>
          </div>

          {messages.length === 0 && (
            <div className="text-center text-gray-600 text-base md:text-lg font-medium mt-4 md:mt-6">
              Hi there! 🌱 I'm AgriBot, your smart assistant 🌾. 
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 px-4 py-4 md:py-6 overflow-y-auto">
            <div className="max-w-3xl mx-auto">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  } mb-4`}
                >
                  <div
                    className={`whitespace-pre-line rounded-2xl px-5 py-3 max-w-[75%] text-sm font-medium shadow ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <Loader2 className="animate-spin" size={16} /> Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Field */}
          <div className="w-full max-w-3xl mx-auto px-4 pb-4 sticky bottom-0">
            <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your question here..."
                className="flex-1 text-black text-sm px-2 py-2 focus:outline-none"
              />
              <button
                onClick={sendMessage}
                disabled={loading}
                className="text-white bg-yellow-500 hover:bg-blue-700 rounded-full p-2"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
