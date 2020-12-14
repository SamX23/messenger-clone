import React, { useState, useEffect } from "react";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
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
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    setUsername(prompt("Enter your name .."));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div>
      <Typography variant="h1" component="h1">
        {username}
      </Typography>

      {messages &&
        messages.map((message, key) => (
          <Message key={key} username={username} message={message} />
        ))}
      <form>
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
      </form>
    </div>
  );
}
