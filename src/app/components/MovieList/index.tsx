import { client, gql } from '../../lib/graphQLClient';
import { MovieListClient } from './client';

const moviesQuery = gql(`
  query getMovies($first: Int = 10){
    movieCollection(first: $first) {
      edges {
        node {
          title
          id
        }
      }
    }
  }
`);

async function getMovies(index: number = 0) {
  'use server';
  const { movieCollection } = await client.request(moviesQuery, {});
  const currentMovie = movieCollection?.edges?.at(index - 1)?.node;
  const name = (currentMovie?.title ?? '') + `: ${index}`;

  return { name, index };
}

export async function MovieList() {
  const currentMovie = await getMovies();

  return <MovieListClient onNext={getMovies} initialMovie={currentMovie.name} />;
}
