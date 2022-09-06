import { createClient } from 'redis';

const client = createClient({
    url: "redis://redis:6379"
});

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('Test key', 'Hello from Redis!');
const value = await client.get('Test key');

console.log(value);