const { MemoryStorage, MessageFactory } = require("botbuilder");
const path = require("path");
const config = require("./config");

// See https://aka.ms/teams-ai-library to learn more about the Teams AI library.
const {
  Application,
  ActionPlanner,
  OpenAIModel,
  PromptManager,
} = require("@microsoft/teams-ai");

// Create AI components
const model = new OpenAIModel({
  // Uncomment the following lines to use OpenAI
  // apiKey: config.openAIKey,
  // defaultModel: "gpt-3.5-turbo",

  azureApiKey: config.azureOpenAIKey,
  azureDefaultDeployment: config.azureOpenAIDeploymentId,
  azureEndpoint: config.azureOpenAIEndpoint,

  useSystemMessages: true,
  logRequests: true,
});
const prompts = new PromptManager({
  promptsFolder: path.join(__dirname, "../bot/prompts"),
});
const planner = new ActionPlanner({
  model,
  prompts,
  defaultPrompt: "chat",
});

// Define storage and application
const storage = new MemoryStorage();
const app = new Application({
  storage,
  ai: {
    planner,
  },
});

app.message(/static/i, async (context, _state) => {
  const { CardFactory } = require("botbuilder");
  await context.sendActivity(
    MessageFactory.attachment(
      CardFactory.adaptiveCard({
        type: "AdaptiveCard",
        version: "1.0",
        body: [
          {
            type: "TextBlock",
            text: "coffee",
            size: "large",
          },
          {
            type: "FactSet",
            facts: [
              {
                title: "coffee type",
                value: "'drip'",
              },
              {
                title: "size",
                value: "'large'",
              },
              {
                title: "milk",
                value: "'whole'",
              },
              {
                title: "number of shots",
                value: "'1'",
              },
            ],
          },
        ],
        $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
      })
    )
  );
});

module.exports = app;
