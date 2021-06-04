const redis = require('redis');
const { redis: redisSettings } = require('../settings');

let client = null;

const getClient = () => {
  if (!client) client = redis.createClient(redisSettings);
  return client;
};

module.exports = {
  getClient
};
