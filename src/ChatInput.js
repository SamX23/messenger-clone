import React, { useState } from "react";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div>
      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>
          Submit
        </button>
      </form>

      {messages.map((message, key) => (
        <div key={key}>
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
