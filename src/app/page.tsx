import { client, gql } from "@/app/lib/graphQLClient";

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

export default async function Home() {
  const { movieCollection } = await client.request(moviesQuery, {});

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl font-semibold">Movie me</h1>
      <ul>
        {movieCollection?.edges?.map((movie) => (
          <li key={movie?.node.id}>{movie?.node.title}</li>
        ))}
      </ul>
    </main>
  );
}
