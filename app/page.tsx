'use client';

import { useState } from 'react';
import TrailerPlayer from '@/components/TrailerPlayer';
import TrailerSelector from '@/components/TrailerSelector';
import { Trailer } from '@/types';

export default function Home() {
  const [selectedTrailer, setSelectedTrailer] = useState<Trailer | null>(null);

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Chan's Movie Trailer
          </h1>
          <p className="text-gray-400 text-lg">
            영화 트레일러로 영어 공부하기
          </p>
        </header>

        {!selectedTrailer ? (
          <TrailerSelector onSelectTrailer={setSelectedTrailer} />
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => setSelectedTrailer(null)}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
            >
              ← 다른 트레일러 선택
            </button>
            <TrailerPlayer trailer={selectedTrailer} />
          </div>
        )}
      </div>
    </main>
  );
}
