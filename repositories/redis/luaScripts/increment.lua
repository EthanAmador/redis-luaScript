local function createIfNotExists(keyName)
    if redis.call('EXISTS',keyName) == 0 then
        redis.call('SET',keyName,0) 
    end
end
local keyName = KEYS[1] 
local increment = ARGV[1] 
createIfNotExists(keyName) 
local keyValue = redis.call('GET',keyName);  
keyValue = keyValue + increment 
redis.call('SET', keyName,keyValue) 
return keyValue