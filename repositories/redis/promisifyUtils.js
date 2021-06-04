const { promisify } = require('util');

const promisifyUtils = client => {
  return {
    eval: promisify(client.eval).bind(client),
    get: promisify(client.get).bind(client),
    set: promisify(client.set).bind(client),
    exists: promisify(client.exists).bind(client)
  };
};

module.exports = promisifyUtils;
