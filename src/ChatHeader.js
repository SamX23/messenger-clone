import React from "react";
import { Typography } from "@material-ui/core";

const ChatHeader = ({ username }) => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Chat App
      </Typography>
      <Typography variant="h3" component="p">
        Welcome {username}
      </Typography>
    </>
  );
};

export default ChatHeader;
