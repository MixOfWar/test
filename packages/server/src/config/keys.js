let gitRepoName = require('git-repo-name');
let repoName = gitRepoName.sync("../../");
module.exports = {
  app: {
    name: repoName,
    apiEndpoint: (process.env.API_URL) ? `/${process.env.API_URL}` : '/api',
  },
  database: {
    url: "mongodb+srv://dbUser:VRKwfLgC3zCaWbPM@cluster0.yzek9.mongodb.net/Cluster0?retryWrites=true&w=majority" //process.env.MONGODB_URI || 'mongodb://localhost:27017/' + repoName,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwt-secret',
    tokenLife: '7d',
  },
}
