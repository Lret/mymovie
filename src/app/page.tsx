// "use client"

import { resolve, type Movie, useQuery } from "../../gqty";
// import { resolve, type Movie } from "../../gqty";


export default async function Home() {
  // const movieCollection = await resolve(({ query: { 
  //   //@ts-ignore
  //   movieCollection
  //   // : {
  //   //   edges : {
  //   //     node : {
  //   //         //@ts-ignore

  //   //       title,
  //   //         //@ts-ignore

  //   //       content
  //   //     }
  //   //   }
  //   // }
  //  } }) => { movieCollection({first: 10}) });

  // const { movieCollection } = useQuery();
  const { movieCollection } = useQuery({ suspense: true });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-xl font-semibold">Movie me</h1>
      <ul>
      {/* {movieCollection.edges.map(({node}: {node: Movie}) => (<li key={node.id}>
          {node.title}
        </li>))} */}
        {movieCollection({first: 10}).edges.map(({node}: {node: Movie}) => (<li key={node.id}>
          {node.title}
        </li>))}
      </ul>
    </main>
  )
}
