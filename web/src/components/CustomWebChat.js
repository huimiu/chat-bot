import React from "react";
import { Components } from "botframework-webchat-component";
import "../styles/CustomWebChat.css";

const CustomWebChat = () => {
  return (
    <Components.AccessKeySinkSurface className='chat-container'>
      <Components.BasicToaster />
      <Components.BasicTranscript className='transcript-container' />
      <Components.BasicConnectivityStatus />
      <Components.BasicSendBox className='send-box' />
    </Components.AccessKeySinkSurface>
  );
};

export default CustomWebChat;
