module.exports = {
  app: {
    name: 'MERN Starter Template',
    apiEndpoint: (process.env.API_URL) ? `/${process.env.API_URL}` : '/api',
  },
  database: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-starter-template',
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwt-secret',
    tokenLife: '7d',
  },
}
