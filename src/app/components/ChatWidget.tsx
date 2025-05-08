"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  type: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hi there! How can I help you with your software licenses today?",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const faqResponses: Record<string, string> = {
    "how do i sell my license":
      "It's easy! Just upload your license details through our form, and we'll provide a valuation within 24 hours. Once you accept, we'll process payment within 48 hours.",
    "what types of licenses do you buy":
      "We purchase a wide range of software licenses including Microsoft Office, Adobe Creative Cloud, AutoCAD, Windows Server, SQL Server, and many more. If you're unsure, just ask us!",
    "how much is my license worth":
      "The value depends on factors like software type, version, remaining subscription time, and market demand. Upload your details for a free valuation with no obligation.",
    "how long does it take to get paid":
      "After accepting our offer, you typically receive payment within 48 hours via your preferred payment method.",
    "is the process secure":
      "Absolutely! We use bank-level encryption for all transactions and follow strict data protection protocols to keep your information safe.",
    "can i sell multiple licenses":
      "Yes! We handle both individual licenses and bulk transactions. In fact, selling multiple licenses often qualifies for volume bonuses.",
  };
  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = { type: "user", text: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    const res = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMessage.text }),
    });

    const reader = res.body?.getReader();
    const decoder = new TextDecoder();
    let currentText = "";
    let done = false;
    setMessages((prev) => [...prev, { type: "bot", text: "" }]);
    // Creating a ReadableStream to handle the stream of data from the response body
    const stream = new ReadableStream({
      async start(controller) {
        try {
          while (!done) {
            const { value, done: isDone } = await reader!.read();

            if (isDone) {
              done = true;
              break;
            }

            const decoded = decoder.decode(value, { stream: true });
            currentText += decoded;

            setMessages((prev) => {
              const updated = [...prev];
              updated[updated.length - 1] = {
                ...updated[updated.length - 1],
                text: currentText,
              };
              return updated;
            });
          }
        } catch (error) {
          console.error("Error in stream processing:", error);
          setMessages((prev) => [
            ...prev,
            { type: "bot", text: "Error processing the response." },
          ]);
        }
      },
    });

    // Consume the stream
    await stream.getReader().read();
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Example questions
  const exampleQuestions = [
    "How do I sell my license?",
    "What types of licenses do you buy?",
    "How much is my license worth?",
    "How long does it take to get paid?",
  ];

  const chatButtonVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    tap: { scale: 0.9 },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 15px rgba(255, 126, 51, 0.5)",
    },
  };

  const chatPanelVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--primary)] text-white flex items-center justify-center shadow-lg"
            aria-label="Open chat"
            variants={chatButtonVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--primary)] rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(255, 126, 51, 0.4)",
                  "0 0 0 10px rgba(255, 126, 51, 0)",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              className="z-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H6L4 18V4H20V16Z"
                fill="white"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed  z-30 bottom-6 right-6 w-80 sm:w-96 h-[450px] bg-[var(--card)] rounded-lg shadow-xl flex flex-col overflow-hidden border border-[var(--border)]"
            variants={chatPanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              className="bg-[var(--primary)] text-white p-4 flex justify-between items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-bold">SoftSell Support</h3>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white p-1 rounded-full"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255,255,255,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close chat"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.button>
            </motion.div>

            <div className="flex-1 overflow-y-auto p-4">
              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`mb-4 ${
                      message.type === "user" ? "text-right" : "text-left"
                    }`}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`inline-block p-3 rounded-lg ${
                        message.type === "user"
                          ? "bg-[var(--primary)] text-white"
                          : "bg-[var(--muted)] text-[var(--foreground)]"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      {message.text}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            <AnimatePresence>
              {messages.length === 1 && (
                <motion.div
                  className="px-4 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <p className="text-[var(--muted-foreground)] text-sm mb-2">
                    Try asking:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exampleQuestions.map((question, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setInputValue(question);
                          setTimeout(() => handleSend(), 100);
                        }}
                        className="text-xs px-2 py-1 rounded-full bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--border)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            delay: 0.6 + index * 0.1,
                            type: "spring",
                          },
                        }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "var(--primary)",
                          color: "white",
                        }}
                      >
                        {question}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div
              className="p-4 border-t border-[var(--border)] flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="input flex-1 mr-2"
                whileFocus={{
                  boxShadow: "0 0 0 2px rgba(255, 126, 51, 0.5)",
                  scale: 1.01,
                }}
              />
              <motion.button
                onClick={handleSend}
                className="btn btn-primary"
                disabled={!inputValue.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
