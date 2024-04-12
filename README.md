# Getting Started with Web-based Chatbot

## Run locally

1. In file `env/.env.local.user`, fill in your Azure OpenAI configurations:

```
SECRET_AZURE_OPENAI_API_KEY=
AZURE_OPENAI_ENDPOINT=
AZURE_OPENAI_DEPLOYMENT_ID=
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
