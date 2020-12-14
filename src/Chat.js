import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import ChatInput from "./ChatInput";
import db from "./firebase";
import FlipMove from "react-flip-move";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        )
      );
    setUsername(prompt("Enter your name .."));
  }, []);

  return (
    <div>
      <ChatHeader username={username} />

      <ChatInput username={username} />

      <FlipMove>
        {messages &&
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))}
      </FlipMove>
    </div>
  );
}
