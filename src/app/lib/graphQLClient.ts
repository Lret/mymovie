import { GraphQLClient } from 'graphql-request';
export { graphql as gql } from '@/app/gql';

const graphqlApiEndpoint = process.env.GRAPH_API_ENDPOINT ?? '';
const graphqlAuthHeader = process.env.GRAPH_API_AUTH_HEADER ?? 'authorization';
const graphqlAuthKey = process.env.GRAPH_API_AUTH_KEY ?? '';

const graphQLClient = new GraphQLClient(graphqlApiEndpoint, {
  headers: {
    [graphqlAuthHeader]: graphqlAuthKey,
  },
});

export const client = graphQLClient;
