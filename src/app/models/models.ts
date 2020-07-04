export interface Token {
  access_token: string;
  expires_in: number;
  token_type: string;
}

export interface Stream {
  game_id: string;
  id: string;
  lagunage: string;
  started_at: string;
  thumbnail_url: string;
  title: string;
  type: string;
  user_id: string;
  user_name: string;
  view_count: number;
}
export interface StreamsMetadata {
  data: Stream[];
}

export interface Games {
  data: {
    id: string;
    name: string;
    box_art_url: string;
  }[];
}
