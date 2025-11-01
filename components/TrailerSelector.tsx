'use client';

import { Trailer } from '@/types';
import { trailers } from '@/data/trailers';
import { Film, Play } from 'lucide-react';

interface TrailerSelectorProps {
  onSelectTrailer: (trailer: Trailer) => void;
}

export default function TrailerSelector({ onSelectTrailer }: TrailerSelectorProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-full">
          <Film size={24} className="text-blue-500" />
          <span className="text-lg">영화 트레일러 선택하기</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trailers.map((trailer) => (
          <div
            key={trailer.id}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group"
            onClick={() => onSelectTrailer(trailer)}
          >
            <div className="relative aspect-video bg-gray-800 overflow-hidden">
              <img
                src={trailer.thumbnail}
                alt={trailer.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all flex items-center justify-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                  <Play size={32} fill="white" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {trailer.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">
                {trailer.description}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
                <span className="px-3 py-1 bg-gray-800 rounded-full">
                  {trailer.subtitles.length} 자막
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        <p>트레일러를 선택하여 영어 공부를 시작하세요</p>
      </div>
    </div>
  );
}
