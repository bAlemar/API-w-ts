import 'reflect-metadata';
import { AppDataSource } from './database/postgresql/providers';
import { buildApp } from './app';

const start = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database connected!');

    const app = buildApp();

    app.listen({ port: 3000 }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server listening at ${address}`);
    });
  } catch (error) {
    console.error('Error during Data Source initialization', error);
  }
};

start();
