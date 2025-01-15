export interface JackettParsedTorrent {
  FirstSeen: string;
  Tracker: string;
  TrackerId: string;
  Category: number[];
  CategoryDesc: string;
  Description: string;
  Details: string;
  DownloadVolumeFactor: number;
  Gain: number;
  Grabs: number;
  Guid: string;
  Languages: string[];
  MinimumRatio: number;
  MinimumSeedTime: number;
  Peers: number;
  PublishDate: string;
  Seeders: number;
  Size: number;
  Subs: string[];
  Title: string;
  TrackerType: string;
  UploadVolumeFactor: number;
  Link?: string;
  MagnetUri?: string;
  // Album?: string | null;
  // Artist?: string | null;
  // Author?: string | null;
  // BlackholeLink?: string | null;
  // BookTitle?: string | null;
  // DoubanId?: string | null;
  // Genres?: string | null;
  // Imdb?: string | null;
  // InfoHash?: string | null;
  // Label?: string | null;
  // Poster?: string | null;
  // Publisher?: string | null;
  // RageID?: string | null;
  // TMDb?: string | null;
  // TVDBId?: string | null;
  // TVMazeId?: string | null;
  // Track?: string | null;
  // TraktId?: string | null;
  // Year?: string | null;
  // Files?: any | null;
}
