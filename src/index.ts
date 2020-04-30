import { createConnection, Connection } from "typeorm";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from "type-graphql";
import * as resolvers from './generated/resolvers';

async function main() {
  await createConnection().then((connection: Connection) => {
    const connectionName = connection.name;
    console.log(`Database opened: ${connectionName}`);
  }).catch(x => console.error(x));
  const schema = await buildSchema({
    resolvers: [...Object.values(resolvers)]
  });
  const server = new ApolloServer({ schema });

  await server.listen(4000);
  console.log("Server has started!");
}

main();
