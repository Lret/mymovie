import { MovieListServer } from './components/MovieListServer';
import { MovieList } from './components/MovieList';
import { revalidatePath } from 'next/cache';
import { RandomServerRiddle } from './components/RandomServerRiddle';

type Response = 'like' | 'neutral' | 'dislike';

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = Number(searchParams?.page);
  const revalidate = async () => {
    'use server';
    revalidatePath('/');
  };

  return (
    <div className='container space-y-4'>
      {/* <MovieListServer page={page} onNext={next} /> */}
      <RandomServerRiddle revalidate={revalidate} />
      <MovieList />
      <MovieList />
    </div>
  );
}
