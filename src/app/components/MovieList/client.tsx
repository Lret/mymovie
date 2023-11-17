'use client';

import { useState } from 'react';

type MovieResponse = {
  name: string;
  index: number;
};

type Props = {
  initialMovie?: string;
  onNext: (index: number) => Promise<MovieResponse>;
};

export function MovieListClient({ initialMovie, onNext }: Props) {
  const [currentMovie, setCurrentMovie] = useState(initialMovie);
  const [pageIndex, setCurrentIndex] = useState(0);

  return (
    <div className='flex items-center gap-4'>
      <button
        className='btn'
        type='submit'
        onClick={async () => {
          const res = await onNext(pageIndex + 1);
          setCurrentIndex(res.index);
          setCurrentMovie(res.name);
        }}
      >
        Next
      </button>
      <h2 className=''>{currentMovie}</h2>
    </div>
  );
}
