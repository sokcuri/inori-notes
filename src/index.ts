import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer } from 'apollo-server';
import { UnitDataResolver } from './resolvers/UnitDataResolver'; // add this
import { buildSchema } from "type-graphql";

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [UnitDataResolver] // add this
  });
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log("Server has started!");
}

main();
