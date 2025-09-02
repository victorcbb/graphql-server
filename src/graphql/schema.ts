import { gql } from 'graphql-tag';
import { userTypeDefs } from './user/typedefs.ts';
import { userResolvers } from './user/resolvers.ts';
import { postTypeDefs } from './post/typedefs.ts';
import { postResolvers } from './post/resolvers.ts';

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

export const typeDefs = [rootTypeDefs, userTypeDefs, postTypeDefs];
export const resolvers = [rootResolvers, userResolvers, postResolvers];
