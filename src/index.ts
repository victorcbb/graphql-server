import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers, typeDefs } from './graphql/schema.ts';
import { context } from './graphql/context.ts';

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context,
  });

  console.log(`🚀  Server ready at: ${url}`);
}

startApolloServer();
