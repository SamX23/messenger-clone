import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase";

import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

const ChatInput = ({ username }) => {
  const [input, setInput] = useState("");

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
  );
};

export default ChatInput;
