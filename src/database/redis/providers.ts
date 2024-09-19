import Redis from 'ioredis';
import * as dotenv from 'dotenv';

dotenv.config();

export const redisClient = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1', // Valor padrão para o host (localhost)
  port: Number(process.env.REDIS_PORT) || 6379, // Valor padrão para a porta Redis
});
