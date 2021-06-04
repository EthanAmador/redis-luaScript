const { REDIS_HOST, REDIS_PORT, REDIS_PASSWORD, REDIS_DB_INDEX } = process.env;

module.exports = {
  redis: {
    host: REDIS_HOST,
    port: REDIS_PORT,
    password: REDIS_PASSWORD,
    db: REDIS_DB_INDEX || 0
  }
};
