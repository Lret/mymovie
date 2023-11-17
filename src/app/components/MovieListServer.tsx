import { client, gql } from '../lib/graphQLClient';

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

async function getMovie(index: number = 0) {
  const { movieCollection } = await client.request(moviesQuery, {});
  const currentMovie = movieCollection?.edges?.at(index - 1)?.node;

  return { currentMovie, index };
}

type MovieListServerProps = {
  page: number;
  onNext: () => Promise<void>;
};

export async function MovieListServer({ page, onNext }: MovieListServerProps) {
  const { index, currentMovie } = await getMovie(page);

  return (
    <div>
      <h2>{currentMovie?.title}</h2>
      <button className='btn' type='submit' onClick={onNext}>
        Next
      </button>
    </div>
  );
}
