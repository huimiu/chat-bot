const config = {
  botId: process.env.BOT_ID,
  botPassword: process.env.BOT_PASSWORD,
  openAIKey: process.env.OPENAI_API_KEY,
  azureOpenAIKey: process.env.AZURE_OPENAI_API_KEY,
  azureOpenAIEndpoint: process.env.AZURE_OPENAI_ENDPOINT,
  azureOpenAIDeploymentId: process.env.AZURE_OPENAI_DEPLOYMENT_ID,
};

module.exports = config;
