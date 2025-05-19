import { useState, useRef, useEffect, KeyboardEvent } from "react";
import axios from "axios";
import { Send, Loader2, Mic, MicOff } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../asset/logo.jpg";

interface Message {
  sender: "user" | "bot";
  text: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [showChatbot, setShowChatbot] = useState<boolean>(false);
  const [listening, setListening] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // @ts-ignore
  const recognition = useRef<any>(
    typeof window !== "undefined" &&
    (window.SpeechRecognition || window.webkitSpeechRecognition)
      ? new (window.SpeechRecognition || window.webkitSpeechRecognition)()
      : null
  );

  useEffect(() => {
    if (!recognition.current) return;

    recognition.current.lang = "en-US"; // or "ta-IN"
    recognition.current.continuous = false;
    recognition.current.interimResults = false;

    recognition.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => prev + " " + transcript);
    };

    recognition.current.onend = () => setListening(false);
  }, []);

  const toggleListening = () => {
    if (!recognition.current) return;
    if (listening) {
      recognition.current.stop();
      setListening(false);
    } else {
      recognition.current.start();
      setListening(true);
    }
  };

  const sendMessage = async (): Promise<void> => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    try {
      const response = await axios.post<{ reply: string }>(
        "http://localhost:8000/bot",
        { message: input }
      );
      const botMessage: Message = { sender: "bot", text: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠ Oops! Something went wrong. Try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* Toggle Button */}
      <div
        className="fixed bottom-4 right-4 cursor-pointer bg-green-500 p-3 rounded-full shadow-lg text-white z-50"
        onClick={() => setShowChatbot((prev) => !prev)}
      >
        💬
      </div>

      {/* Chatbot Window */}
      {showChatbot && (
        <div className="fixed bottom-0 right-0 w-full max-w-md h-[70vh] bg-slate-950 rounded-lg z-50 border border-green-500 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 bg-white dark:bg-neutral-950 border-b border-green-500">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Bot Logo" className="h-8 w-8 rounded-full" />
              <span className="text-lg font-semibold text--700">
                Agri-Commerce Chatbot
              </span>
            </div>
            <div
              className="cursor-pointer border border-green-500 rounded-full px-2 py-1"
              onClick={() => setShowChatbot(false)}
            >
              X
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <div className="max-w-3xl mx-auto">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 text-base mb-4">
                  Hi there! 🌱 I'm AgriBot, your smart assistant 🌾.
                </div>
              )}
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
                        ? "bg-green-600 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="text-sm text-gray-400 flex items-center gap-2">
                  <Loader2 className="animate-spin" size={16} /> Thinking...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Sticky Input */}
          <div className="w-full px-4 py-3 bg-slate-950 sticky bottom-0  border-gray-300">
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 shadow-md">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="How can I assist you ....."
                className="flex-1 text-gray text-sm px-2 py-2 focus:outline-none"
              />
              <button
                onClick={toggleListening}
                className={`text-white rounded-full p-2 ${
                  listening ? "bg-red-500" : "bg-blue-500"
                }`}
                title={listening ? "Stop Listening" : "Start Listening"}
              >
                {listening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
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
