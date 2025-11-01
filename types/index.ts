export interface Trailer {
  id: string;
  title: string;
  videoId: string;
  thumbnail: string;
  description: string;
  subtitles: Subtitle[];
}

export interface Subtitle {
  start: number;
  end: number;
  text: string;
}

export interface RepeatSection {
  start: number;
  end: number;
}
