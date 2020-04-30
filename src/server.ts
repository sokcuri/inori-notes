import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { BookResolver } from './resolvers/BookResolver';
import { buildSchema } from "type-graphql";

import App from './app';
import bodyParser from 'body-parser';
import loggerMiddleware from './middleware/logger';

import HomeController from './controllers/home';

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [BookResolver]
  });
  const app = new App({
    port: 5000,
    controllers: [
      new HomeController(),
    ],
    middleWares: [
      bodyParser.json(),
      bodyParser.urlencoded({ extended: true }),
      loggerMiddleware
    ]
  });

  app.listen();
}

main();
