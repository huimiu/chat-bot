# Getting Started with Web-based Chatbot

## Folder structure

| Folder    | Contents                                                                                |
| --------- | --------------------------------------------------------------------------------------- |
| `.vscode` | VSCode files for debugging.                                                             |
| `bot`     | Includes all the necessary files and modules required for the bot to function properly. |
| `env`     | Environment files.                                                                      |
| `infra`   | Templates for provisioning Azure resources.                                             |
| `web`     | The source code for the web user interface (UI) of the chatbot.                         |

The following files can be customized and demonstrate an example implementation to get you started.

| File                            | Contents                                                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------- |
| `bot/index.js`                  | Sets up and configures the AI Chat Bot.                                                            |
| `bot/app.js`                    | Handles business logics for the AI Chat Bot.                                                       |
| `bot/config.js`                 | Defines the environment variables.                                                                 |
| `bot/prompts/chat/skprompt.txt` | Defines the prompt.                                                                                |
| `bot/prompts/chat/config.json`  | Configures the prompt.                                                                             |
| `web/src/App.js`                | The main component of the React application. It sets up the routing and main layout of the web UI. |
| `web/src/index.js`              | The entry point for the React application. It renders the App component into the DOM.              |

## Testing this sample

1. In file `env/.env.local.user`, fill in your Azure OpenAI configurations:

   ```
   SECRET_AZURE_OPENAI_API_KEY=
   AZURE_OPENAI_ENDPOINT=
   AZURE_OPENAI_DEPLOYMENT_ID=
   ```

   > Note: You can uncomment _"Use OpenAI"_ part and comment out _"use Azure OpenAI"_ part in `bot/app.js` to use OpenAI，e.g.

   ```javascript
   const model = new OpenAIModel({
     // Use OpenAI
     apiKey: config.openAIKey,
     defaultModel: "gpt-3.5-turbo",

     // Uncomment the following lines to use Azure OpenAI
     // azureApiKey: config.azureOpenAIKey,
     // azureDefaultDeployment: "gpt-35-turbo",
     // azureEndpoint: config.azureOpenAIEndpoint,

     useSystemMessages: true,
     logRequests: true,
   });
   ```

2. Press F5 to run your bot. After the bot runs, you should see the following message in the terminal:

   ```
   Bot Started, restify listening to http://[::]:3978
   Debugger attached.
   ```

3. The bot is registered in dev.botframework.com, you can go to `https://dev.botframework.com/bots/channels?id=<your-bot-id>&channelId=directline` to get the direct line secret key.

   > Note: your bot id can be found in the `env/.env.local` file.

4. Fill in the direct line secret in the `web/.env` file:

   ```
   REACT_APP_DIRECT_LINE_SECRET=<your-direct-line-secret>
   ```

5. Go to the `web` folder and run the following command to install the dependencies.

   ```bash
   cd web
   npm install
   ```

6. Run the following command to start the web app.

   ```bash
   npm run start
   ```

7. Your web app should automatically open in your default browser. If it doesn't, you can navigate to `http://localhost:3000` to see the web app.
