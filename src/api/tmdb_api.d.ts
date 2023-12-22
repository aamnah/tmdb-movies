// https://github.com/xusoo/tmdb-typescript-api/tree/master/src/model
// Sample ID: 787699 for Wonka
export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: Date
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface Video {
  id: string
  iso_639_1: string
  iso_3166_1: string
  key: string
  name: string
  official: boolean
  published_at: string
  site: string
  size: number
  type: string
}

export interface MovieList {
  dates: {
    maximum: string
    minimum: string
  }
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
