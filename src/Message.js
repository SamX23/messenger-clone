import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import "./Message.css";
export default function Message({ username, message }) {
  const isUser = username === message.username;

  return (
    <div className={`message ${isUser && "message__user"} `}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {message.username} : {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
