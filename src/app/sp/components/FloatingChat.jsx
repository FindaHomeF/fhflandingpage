'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X, Send, Minimize2, ClipboardCheck, Maximize2 } from 'lucide-react'
import { toast } from 'sonner'

const FloatingChat = ({ isOpen, onClose, agentName = 'Agent', propertyTitle }) => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef(null)
  const hasInitializedMessage = useRef(false)

  // Populate input with inquiry message when chat opens
  useEffect(() => {
    if (isOpen && propertyTitle && !hasInitializedMessage.current) {
      setNewMessage(`Hi! I'm interested in "${propertyTitle}". Could you tell me more about it?`)
      hasInitializedMessage.current = true
    }
  }, [isOpen, propertyTitle])

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (isOpen && !isMinimized) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen, isMinimized])

  // Reset message input and flag when chat closes
  useEffect(() => {
    if (!isOpen) {
      setNewMessage('')
      hasInitializedMessage.current = false
    }
  }, [isOpen])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: 'Just now'
      }
    ])
    setNewMessage('')
    
    // Simulate agent response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'Thank you for your interest! I\'ll get back to you shortly with more details.',
          sender: 'agent',
          timestamp: 'Just now'
        }
      ])
    }, 1000)
  }

  const handleRequestInspection = () => {
    toast.info('Inspection request sent to agent')
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        text: 'I would like to request a property inspection.',
        sender: 'user',
        timestamp: 'Just now'
      }
    ])
  }

  if (!isOpen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 w-96 shadow-2xl rounded-lg overflow-hidden bg-white border border-gray-200">
      {/* Header */}
      <div className="bg-primary text-white p-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">{agentName}</h3>
          <p className="text-xs opacity-90">Online</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-white/80' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1"
                autoFocus
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleRequestInspection}
                className="h-10 w-10 p-0"
                title="Request Inspection"
              >
                <ClipboardCheck className="w-4 h-4" />
              </Button>
              <Button type="submit" className="h-10 w-10 p-0 bg-primary hover:bg-primary/90">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}

export default FloatingChat
