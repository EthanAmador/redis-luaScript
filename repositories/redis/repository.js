const { redis } = require('../../database');
const promisifyUtils = require('./promisifyUtils');

const increment = async (keyName, increment) => {
  const client = redis.getClient();
  await createIfNotExist(keyName);
  let value = await promisifyUtils(client).get(keyName);
  value++;
  await promisifyUtils(client).set(keyName, increment);
  return value;
};

const createIfNotExist = async keyName => {
  const client = redis.getClient();
  const exits = await promisifyUtils(client).exists(keyName);
  if (!exits) await promisifyUtils(client).set(keyName, 0);
};

module.exports = {
  increment
};
