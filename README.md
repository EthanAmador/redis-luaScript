# redis-luaScript

Increment value key with lua script in redis database

## scaffolding

```sh
├── LICENSE
├── README.md
├── database
│   ├── connections
│   │   ├── index.js
│   │   └── redis.js
│   ├── index.js
│   └── settings
│       └── index.js
├── index.js
├── .env
|── .env.example
├── package.json
└── repositories
    ├── index.js
    └── redis
        ├── index.js
        ├── lua-repository.js
        ├── luaScripts
        │   ├── increment.lua
        │   └── index.js
        ├── promisifyUtils.js
        └── repository.js
```

**env.example**

```javascript
# Redis config
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=
```
