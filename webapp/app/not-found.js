import Image from 'next/image';

import notFoundGif from './notfound/main.gif';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 bg-black text-white">
      <Image
        src={notFoundGif}
        alt="404"
        width={100}
        className="mb-4"
      />
      <h1 className="text-6xl text-purple-600">404</h1>
      <p className="mt-4 text-sm">Cette page n'existe pas... pour le moment !</p>
    </div>
  );
}