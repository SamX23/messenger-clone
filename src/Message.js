import React from "react";
import { Typography } from "@material-ui/core";

export default function Message({ text }) {
  return (
    <Typography variant="body1" component="p">
      {text}
    </Typography>
  );
}
