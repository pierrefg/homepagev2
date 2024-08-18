import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <p className="mt-4 text-xl text-gray-700">Cette page n'existe pas pour le moment !</p>
      <Link href="/">
        <button className="btn-black-primary mt-4">
            Accueil
        </button>
      </Link>
    </div>
  );
}