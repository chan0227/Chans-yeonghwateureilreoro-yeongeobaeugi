'use client';

import { useState, useEffect, useRef } from 'react';
import YouTube, { YouTubeProps, YouTubePlayer } from 'react-youtube';
import { Trailer, Subtitle } from '@/types';
import { Play, Pause, RotateCcw, Volume2 } from 'lucide-react';

interface TrailerPlayerProps {
  trailer: Trailer;
}

export default function TrailerPlayer({ trailer }: TrailerPlayerProps) {
  const [player, setPlayer] = useState<YouTubePlayer | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSubtitle, setCurrentSubtitle] = useState<Subtitle | null>(null);
  const [repeatStart, setRepeatStart] = useState<number | null>(null);
  const [repeatEnd, setRepeatEnd] = useState<number | null>(null);
  const [isRepeating, setIsRepeating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const onReady: YouTubeProps['onReady'] = (event) => {
    setPlayer(event.target);
  };

  const onStateChange: YouTubeProps['onStateChange'] = (event) => {
    setIsPlaying(event.data === 1);
  };

  useEffect(() => {
    if (!player) return;

    const updateTime = () => {
      player.getCurrentTime().then((time: number) => {
        setCurrentTime(time);

        // Find current subtitle
        const subtitle = trailer.subtitles.find(
          (sub) => time >= sub.start && time <= sub.end
        );
        setCurrentSubtitle(subtitle || null);

        // Handle repeat
        if (isRepeating && repeatEnd !== null && time >= repeatEnd) {
          player.seekTo(repeatStart || 0, true);
        }
      });
    };

    if (isPlaying) {
      intervalRef.current = setInterval(updateTime, 100);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [player, isPlaying, trailer.subtitles, isRepeating, repeatStart, repeatEnd]);

  const handlePlayPause = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const setRepeatSection = () => {
    if (repeatStart === null) {
      setRepeatStart(currentTime);
    } else if (repeatEnd === null) {
      setRepeatEnd(currentTime);
      setIsRepeating(true);
    } else {
      // Reset
      setRepeatStart(null);
      setRepeatEnd(null);
      setIsRepeating(false);
    }
  };

  const handleSubtitleClick = (subtitle: Subtitle) => {
    if (player) {
      player.seekTo(subtitle.start, true);
      player.playVideo();
    }
  };

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      cc_load_policy: 1,
      controls: 1,
    },
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        <div className="aspect-video bg-black">
          <YouTube
            videoId={trailer.videoId}
            opts={opts}
            onReady={onReady}
            onStateChange={onStateChange}
            className="w-full h-full"
          />
        </div>

        {/* Current Subtitle Display */}
        {currentSubtitle && (
          <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
            <p className="text-xl text-center leading-relaxed">
              {currentSubtitle.text}
            </p>
          </div>
        )}

        {/* Controls */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePlayPause}
              className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>

            <button
              onClick={setRepeatSection}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center gap-2 ${
                isRepeating
                  ? 'bg-green-600 hover:bg-green-700'
                  : repeatStart !== null
                  ? 'bg-yellow-600 hover:bg-yellow-700'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <RotateCcw size={20} />
              {isRepeating
                ? '반복 중'
                : repeatStart !== null
                ? '끝 지점 설정'
                : '구간 반복 시작'}
            </button>

            {(repeatStart !== null || repeatEnd !== null) && (
              <div className="text-sm text-gray-400">
                {repeatStart !== null && `시작: ${repeatStart.toFixed(1)}s`}
                {repeatEnd !== null && ` → 끝: ${repeatEnd.toFixed(1)}s`}
              </div>
            )}
          </div>

          <div className="text-center text-gray-400 text-sm">
            현재 시간: {currentTime.toFixed(1)}s
          </div>
        </div>

        {/* Subtitles List */}
        <div className="p-6 bg-gray-850 border-t border-gray-700">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Volume2 size={20} />
            자막 목록
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {trailer.subtitles.map((subtitle, index) => (
              <button
                key={index}
                onClick={() => handleSubtitleClick(subtitle)}
                className={`w-full text-left p-4 rounded-lg transition-all ${
                  currentSubtitle === subtitle
                    ? 'bg-blue-600 shadow-lg'
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 text-sm font-mono min-w-[80px]">
                    {subtitle.start.toFixed(1)}s
                  </span>
                  <p className="flex-1">{subtitle.text}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
