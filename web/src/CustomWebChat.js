import React from "react";
import { Components } from "botframework-webchat-component";

const CustomWebChat = () => {
  return (
    <Components.AccessKeySinkSurface>
      <Components.BasicToaster />
      <Components.BasicTranscript />
      <Components.BasicConnectivityStatus />
      <Components.BasicSendBox />
    </Components.AccessKeySinkSurface>
  );
};

export default CustomWebChat;
