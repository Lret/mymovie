type Riddle = {
  riddle: string;
  answer: string;
};

async function getRiddle() {
  const res = await fetch('https://riddles-api.vercel.app/random', { cache: 'no-store' });
  const data = (await res.json()) as Riddle;

  console.log(data);

  return data;
}

type Props = {
  revalidate: () => Promise<void>;
};

export async function RandomServerRiddle({ revalidate }: Props) {
  const { riddle, answer } = await getRiddle();

  return (
    <div className='space-y-2'>
      <form>
        <button
          className='btn'
          type='submit'
          formAction={async () => {
            'use server';
            console.log('Server call');
            await revalidate();
          }}
        >
          Another riddle
        </button>
      </form>
      <details className='inline'>
        <summary>{riddle}</summary>
        {answer}
      </details>
    </div>
  );
}
