import React, { useState } from "react";
import db from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton, FormControl, Input } from "@material-ui/core";

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
    <form className="app__form">
      <FormControl className="app__formControl">
        <Input
          className="app__input"
          placeholder="Enter a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <IconButton
          className="app__iconButton"
          variant="contained"
          type="submit"
          onClick={sendMessage}
          disabled={!input}
        >
          <SendIcon />
        </IconButton>
      </FormControl>
    </form>
  );
};

export default ChatInput;
