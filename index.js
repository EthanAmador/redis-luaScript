require('dotenv').config();
const {
  redis: { luaRepository, repository }
} = require('./repositories');

const createPromisesWithLua = (numberPromises, { keyName, increment }) => {
  let promises = [];
  for (let i = 1; i <= numberPromises; i++) {
    promises.push(
      new Promise(async (resolve, reject) => {
        console.log(`Promise ${i} ${new Date()}`);
        try {
          const result = await luaRepository.incrementValue(keyName, increment);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      })
    );
  }
  return promises;
};

const createPromises = (numberPromises, { keyName, increment }) => {
  let promises = [];
  for (let i = 1; i <= numberPromises; i++) {
    promises.push(
      new Promise(async (resolve, reject) => {
        console.log(`Promise ${i} ${new Date()}`);
        try {
          const result = await repository.increment(keyName, increment);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      })
    );
  }
  return promises;
};

//increment with luaScript
(async () => {
  const promises = createPromisesWithLua(3, {
    keyName: 'KEYNAME',
    increment: 1
  });
  const [result1, result2, result3] = await Promise.all(promises);
  console.log('Result promises with Lua =>', { result1, result2, result3 });
})();

//increment Normal
(async () => {
  const promises = createPromises(3, { keyName: 'KEYNAME0', increment: 1 });
  const [result1, result2, result3] = await Promise.all(promises);
  console.log('Result promises =>', { result1, result2, result3 });
})();
