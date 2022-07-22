import dotenv from 'dotenv';

dotenv.config();

export default {
  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: process.env.PORT || 8080,
  MONGO_URL: process.env.MONGO_URL || 'noURL',
  CNX_STR: 'mongodb+srv://admin:admin@cluster0.no0td.mongodb.net/?retryWrites=true&w=majority',
  MONGO_DB: process.env.MONGO_BASE || 'desafio35',
  MONGO_BASE: 'desafio35',
  MODO_PERSISTENCIA: process.env.MODO_PERSISTENCIA || 'mongodb'
}