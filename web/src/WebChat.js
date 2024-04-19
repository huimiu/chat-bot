import React from "react";
import ReactWebChat from "botframework-webchat";

import "./styles/WebChat.css";

const WebChat = ({ directLine }) => {
  return <ReactWebChat className={`web-chat`} directLine={directLine} />;
};

export default WebChat;
