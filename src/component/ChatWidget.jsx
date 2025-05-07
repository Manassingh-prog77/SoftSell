/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  Avatar,
  useTheme,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Fade,
  CircularProgress,
  Zoom,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";

const ChatWidget = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Predefined questions for suggestion bubbles
  const suggestedQuestions = [
    "How do I sell my license?",
    "Is it safe to share my license?",
  ];

  // Scroll to bottom of chat whenever messages update
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const toggleChat = () => {
    setOpen(!open);
    // If first time opening, show welcome message
    if (!open && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          text: "Hi there! How can I help you with selling your unused software licenses today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: `user-${Date.now()}`,
      text: newMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");

    // Simulate bot typing
    setIsTyping(true);

    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse = {
        id: `bot-${Date.now()}`,
        text: generateBotResponse(newMessage),
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestedQuestion = (question) => {
    setNewMessage(question);
    // Focus the input field
    document.getElementById("chat-input").focus();
  };

  // Simple response generator based on user input
  const generateBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("sell") || lowerCaseMessage.includes("how")) {
      return "Selling your license with SoftSell is easy! Just upload your license details through our secure portal, receive a valuation within 24 hours, and get paid once you accept our offer. Would you like to start the process now?";
    } else if (
      lowerCaseMessage.includes("safe") ||
      lowerCaseMessage.includes("security") ||
      lowerCaseMessage.includes("secure")
    ) {
      return "Absolutely! Security is our top priority. We use end-to-end encryption for all license data. We only need specific non-sensitive details to validate your license, and our process is compliant with industry security standards.";
    } else if (
      lowerCaseMessage.includes("price") ||
      lowerCaseMessage.includes("worth") ||
      lowerCaseMessage.includes("value")
    ) {
      return "License values vary based on software type, version, and remaining validity period. Our proprietary valuation algorithm ensures you get the best market price. Upload your license details for a free, no-obligation quote!";
    } else if (
      lowerCaseMessage.includes("time") ||
      lowerCaseMessage.includes("long")
    ) {
      return "The entire process typically takes 2-5 business days from submission to payment. Valuation is usually completed within 24 hours, and payment is processed within 1-3 business days after you accept our offer.";
    } else {
      return "Thanks for your message! Our team is ready to help with your software license needs. Could you please provide more details about your specific situation, or tell me which software licenses you're looking to sell?";
    }
  };

  // Chat bubble animation variants
  const bubbleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Zoom in={!open}>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={toggleChat}
          sx={{
            position: "fixed",
            bottom: 60,
            right: 20, // Keep this at 20
            zIndex: 1000,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
            "&:hover": {
              background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
            },
          }}
        >
          <ChatIcon />
        </Fab>
      </Zoom>
      <Collapse in={open} timeout={300}>
        <Paper
          elevation={6}
          sx={{
            position: "fixed",
            bottom: 80, 
            right: 20,
            width: { xs: "85vw", sm: "400px" },
            height: "500px",
            zIndex: 1000,
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            bgcolor: theme.palette.background.paper,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: theme.shadows[10],
          }}
        >
          {/* Chat Header */}
          <Box
            sx={{
              p: 2,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SmartToyIcon sx={{ mr: 1 }} />
              <Typography variant="h6" fontWeight="bold">
                SoftSell Assistant
              </Typography>
            </Box>
            <IconButton
              onClick={toggleChat}
              size="small"
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages Container */}
          <Box
            sx={{
              p: 2,
              flexGrow: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              bgcolor:
                theme.palette.mode === "light"
                  ? "rgba(248, 249, 250, 1)"
                  : "rgba(18, 18, 18, 1)",
            }}
          >
            {messages.map((message) => (
              <Box
                key={message.id}
                component={motion.div}
                variants={bubbleVariants}
                initial="hidden"
                animate="visible"
                sx={{
                  display: "flex",
                  justifyContent:
                    message.sender === "user" ? "flex-end" : "flex-start",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    maxWidth: "80%",
                    gap: 1,
                    flexDirection:
                      message.sender === "user" ? "row-reverse" : "row",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor:
                        message.sender === "user"
                          ? theme.palette.secondary.main
                          : theme.palette.primary.main,
                      width: 32,
                      height: 32,
                    }}
                  >
                    {message.sender === "user" ? (
                      <PersonIcon fontSize="small" />
                    ) : (
                      <SmartToyIcon fontSize="small" />
                    )}
                  </Avatar>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor:
                        message.sender === "user"
                          ? theme.palette.secondary.light
                          : theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      color:
                        message.sender === "user"
                          ? "white"
                          : theme.palette.text.primary,
                    }}
                  >
                    <Typography variant="body1">{message.text}</Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mt: 0.5,
                        color:
                          message.sender === "user"
                            ? "rgba(255,255,255,0.7)"
                            : theme.palette.text.secondary,
                        fontSize: "0.7rem",
                        textAlign: message.sender === "user" ? "right" : "left",
                      }}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            ))}

            {/* Bot typing indicator */}
            {isTyping && (
              <Box
                component={motion.div}
                variants={bubbleVariants}
                initial="hidden"
                animate="visible"
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Avatar
                    sx={{
                      bgcolor: theme.palette.primary.main,
                      width: 32,
                      height: 32,
                    }}
                  >
                    <SmartToyIcon fontSize="small" />
                  </Avatar>
                  <Paper
                    elevation={1}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.divider}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <CircularProgress size={16} thickness={5} sx={{ mr: 1 }} />
                    <Typography variant="body2">Typing</Typography>
                  </Paper>
                </Box>
              </Box>
            )}

            {/* Suggested questions - show when chat is newly opened */}
            {messages.length <= 1 && (
              <Fade in={true} timeout={1000}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    mt: 2,
                  }}
                >
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ textAlign: "center" }}
                  >
                    Suggested questions:
                  </Typography>
                  {suggestedQuestions.map((question, index) => (
                    <Paper
                      key={index}
                      component={motion.div}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      sx={{
                        p: 1.5,
                        borderRadius: 2,
                        cursor: "pointer",
                        bgcolor:
                          theme.palette.mode === "light"
                            ? "rgba(79, 70, 229, 0.08)"
                            : "rgba(79, 70, 229, 0.15)",
                        border: `1px solid ${theme.palette.divider}`,
                        transition: "all 0.2s",
                        "&:hover": {
                          bgcolor:
                            theme.palette.mode === "light"
                              ? "rgba(79, 70, 229, 0.15)"
                              : "rgba(79, 70, 229, 0.25)",
                        },
                      }}
                    >
                      <Typography variant="body2">{question}</Typography>
                    </Paper>
                  ))}
                </Box>
              </Fade>
            )}

            <div ref={messagesEndRef} />
          </Box>

          {/* Input Area */}
          <Box
            sx={{
              p: 2,
              borderTop: `1px solid ${theme.palette.divider}`,
              display: "flex",
              alignItems: "center",
              bgcolor: theme.palette.background.paper,
            }}
          >
            <TextField
              id="chat-input"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              fullWidth
              variant="outlined"
              size="small"
              autoComplete="off"
              sx={{
                mr: 1,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "20px",
                },
              }}
            />
            <IconButton
              color="primary"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              sx={{
                background: newMessage.trim()
                  ? `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                  : "inherit",
                color: newMessage.trim()
                  ? "white"
                  : theme.palette.action.disabled,
                "&:hover": {
                  background: newMessage.trim()
                    ? `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
                    : "inherit",
                },
              }}
            >
              <SendIcon />
            </IconButton>
          </Box>
        </Paper>
      </Collapse>
    </>
  );
};

export default ChatWidget;
