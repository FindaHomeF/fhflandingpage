'use client';

import { useState, useEffect, useRef } from 'react';
import { IoSendSharp } from "react-icons/io5";
import { LiaEllipsisVSolid } from "react-icons/lia";

export default function ChatPage() {
  const [activeChat, setActiveChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef(null);

  // Mock data - replace with your actual data fetching
  useEffect(() => {
    // Simulate loading chats
    setTimeout(() => {
      setChats([
        {
          id: '1',
          name: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
          lastMessage: 'Hey, how are you doing?',
          unread: 2,
        },
        {
          id: '2',
          name: 'Jane Smith',
          avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
          lastMessage: 'Meeting at 3pm',
          unread: 0,
        },
        {
          id: '3',
          name: 'Team Collaboration',
          avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
          lastMessage: 'Alice: I finished the design',
          unread: 5,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Load messages when chat is selected
  useEffect(() => {
    if (activeChat) {
      // Simulate loading messages
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          {
            id: '1',
            text: 'Hey there!',
            sender: 'other',
            timestamp: new Date(Date.now() - 3600000),
          },
          {
            id: '2',
            text: 'Hi! How are you?',
            sender: 'user',
            timestamp: new Date(Date.now() - 1800000),
          },
          {
            id: '3',
            text: "I'm doing well, thanks for asking. How about you?",
            sender: 'other',
            timestamp: new Date(Date.now() - 900000),
          },
          {
            id: '4',
            text: "Pretty good! Just working on some projects.",
            sender: 'user',
            timestamp: new Date(Date.now() - 600000),
          },
        ]);
        setIsLoading(false);
      }, 500);
    }
  }, [activeChat]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMessage = {
        id: (Date.now() + 1).toString(),
        text: `Reply to: ${inputMessage}`,
        sender: 'other',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, replyMessage]);
    }, 1000);
  };

  const handleKeyDown = () => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-50">
      {/* Sidebar - Chat List */}
      <div className={`w-full md:w-80 lg:w-96 md:pl-8 md:pr-3 border-r border-black/10 bg-white ${activeChat ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b border-black/10">
          <h1 className="text-xl md:text-2xl font-bold">Messages</h1>
        </div>
        
        {isLoading && !chats.length ? (
          <div className="p-4 flex justify-center">
            <div className="animate-pulse">Loading chats...</div>
          </div>
        ) : (
          <div className="overflow-y-auto h-[calc(100%-60px)]">
            {chats.map(chat => (
              <div
                key={chat.id}
                className={`p-4 border-b border-black/10 flex items-center cursor-pointer hover:bg-gray-50 rounded-lg ${activeChat === chat.id ? 'bg-darkBlue/10' : ''}`}
                onClick={() => setActiveChat(chat.id)}
              >
                <div className="relative">
                  <img
                    src={chat.avatar}
                    alt={chat.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {chat.unread > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">{chat.name}</h3>
                    <span className="text-xs text-gray-500">
                      {/* {format(new Date(), 'h:mm a')} */}3:45 PM
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      {activeChat ? (
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-black/10 bg-white flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="md:hidden mr-2 text-gray-500"
                onClick={() => setActiveChat(null)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <img
                src={chats.find(c => c.id === activeChat)?.avatar || ''}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="ml-3">
                <h2 className="font-semibold">
                  {chats.find(c => c.id === activeChat)?.name}
                </h2>
                <p className="text-xs text-gray-500">Online</p>
              </div>
            </div>
            <button className="text-gray-500 hover:text-gray-700">
              <LiaEllipsisVSolid className="h-6 w-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {isLoading ? (
              <div className="flex justify-center items-center h-full">
                <div className="animate-pulse">Loading messages...</div>
              </div>
            ) : messages.length === 0 ? (
              <div className="flex justify-center items-center h-full text-gray-500">
                No messages yet. Start the conversation!
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 ${message.sender === 'user' ? 'bg-darkBlue text-white' : 'bg-neutral-200'}`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                        {/* {format(message.timestamp, 'h:mm a')} */}2:30 PM
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-black/10 bg-white">
            <div className="flex items-center">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 border border-black/50 rounded-full py-2 px-4 outline-none focus:outline-none focus:ring-1 focus:ring-darkBlue resize-none"
                rows={1}
                style={{ minHeight: '44px', maxHeight: '120px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={inputMessage.trim() === ''}
                className="ml-2 text-darkBlue rounded-full p-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <IoSendSharp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-gray-50">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-xl font-semibold mb-2">Select a chat</h2>
            <p className="text-gray-500">
              Choose a conversation from the sidebar to start messaging or create a new chat.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}