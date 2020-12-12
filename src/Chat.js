import React, { useState, useEffect } from "react";
import Message from "./Message";
import {
  Typography,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter your name .."));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div>
      <Typography variant="h1" component="h1">
        {username}
      </Typography>

      {messages.map((message, key) => (
        <Message key={key} text={message} />
      ))}

      <FormControl>
        <InputLabel>Enter a message..</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)} />
        <Button
          variant="contained"
          type="submit"
          onClick={sendMessage}
          disabled={!input}
        >
          Send
        </Button>
      </FormControl>
    </div>
  );
}
