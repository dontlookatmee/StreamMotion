export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface Stream {
  game_id: string;
  id: string;
  language: string;
  started_at: string;
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string;
  user_name: string;
  viewer_count: number;
}
export interface StreamsMetadata {
  data: Stream[];
  pagination: {
    cursor: string;
  };
}

export interface Games {
  data: {
    id: string;
    name: string;
    box_art_url: string;
  }[];
}
