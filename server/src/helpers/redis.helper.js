const redis = require('redis');
const client = redis.createClient({
    url: process.env.REDIS_URL
});

client.on('connect', () => {
    console.log('Redis client connected');
});

client.on('error', (err) => {
    console.error('Redis client error:', err);
});

client.connect().catch(console.error);

const setJWT = async (key, value) => {
    try {
        await client.set(key, value);
        return Promise.resolve(true);
    } catch (error) {
        console.error("Redis SET error:", error);
        return Promise.reject(error);
    }
};

const getJWT = async (key) => {
    try {
        const value = await client.get(key);
        return Promise.resolve(value);
    } catch (error) {
        console.error("Redis GET error:", error);
        return Promise.reject(error);
    }
};

module.exports = {setJWT, getJWT}