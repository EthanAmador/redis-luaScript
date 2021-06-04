const { redis } = require('../../database');
const promisifyUtils = require('./promisifyUtils');
const { incrementFile } = require('./luaScripts');

const incrementValue = async (keyName, value) => {
  const client = redis.getClient();
  return promisifyUtils(client).eval(incrementFile, 1, keyName, value);
};

module.exports = {
  incrementValue
};
