import { createConnection, Connection, getRepository } from "typeorm";
import { ApolloServer } from 'apollo-server';
import { buildSchema } from "type-graphql";
import * as entities from './entities';
import * as resolvers from './resolvers';

async function getUnitData() {
  const repository = getRepository(entities.UnitData);
  const item = await repository.find({ unitName: 'ヒヨリ' });
  console.log(item);
}

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

  // await getUnitData();
}

main();
