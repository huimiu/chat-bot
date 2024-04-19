import React from "react";
import { createDirectLine } from "botframework-webchat";
import { Components } from "botframework-webchat-component";
import CustomWebChat from "./components/CustomWebChat";
import WebChat from "./WebChat";

// This is a sample demo, You should NEVER put the Direct Line secret in the browser or client app.
// To talk to your bot, you should use the token exchanged using your Direct Line secret.
// https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-direct-line-3-0-authentication

async function getDirectLineToken() {
  const res = await fetch(
    "https://directline.botframework.com/v3/directline/tokens/generate",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_DIRECT_LINE_SECRET}`,
      },
    }
  );
  const { token } = await res.json();
  return token;
}

const App = () => {
  const [directLine, setDirectLine] = React.useState();

  if (!directLine) {
    // We will load DirectLineJS asynchronously on first render.
    getDirectLineToken().then((token) =>
      setDirectLine(
        createDirectLine({
          token,
        })
      )
    );
  }

  return (
    // We are using the "Composer" component here, which all descendants will have access to the Web Chat API by HOC-ing thru "connectToWebChat".
    // <React.Fragment>
    //   {!!directLine && (
    //     <Components.Composer directLine={directLine}>
    //       <CustomWebChat />
    //     </Components.Composer>
    //   )}
    // </React.Fragment>

    // If you are not using Composer, you can use the "connectToWebChat" HOC directly.
    <React.Fragment>
      {!!directLine && <WebChat directLine={directLine} />}
    </React.Fragment>
  );
};

export default App;
