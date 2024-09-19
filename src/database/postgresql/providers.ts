import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { Product } from './entities/product';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost', // Valor padrão para o host
  port: Number(process.env.POSTGRES_PORT) || 5432, // Valor padrão para a porta
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Product],
  synchronize: true, // Cuidado ao usar em produção, pois recria o esquema
  logging: true,
});

// Inicializando a conexão com o banco de dados
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
