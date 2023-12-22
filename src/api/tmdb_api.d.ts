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

export interface GenreList {
  genres: Genre[]
}

export interface Collection {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
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

export interface Videos extends Video {
  id: number
  results: Video[]
}
export interface MovieList {
  dates: {
    maximum: Date
    minimum: Date
  }
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export interface Company {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface Country {
  iso_3166_1: string
  name: string
}

export interface Language {
  english_name: string
  iso_639_1: string
  name: string
}

// https://api.themoviedb.org/3/movie/{movie_id}
export interface MovieDetail extends Movie {
  belongs_to_collection: null | Collection
  budget: number
  genres: Genre[]
  homepage: string
  imdb_id: string
  production_companies: Company[]
  production_countries: Country[]
  revenue: number
  runtime: number
  spoken_languages: Language[]
  status: string // Released
  tagline: string
  videos: {
    results: Video[]
  }
  images: { backdrops: []; logos: []; posters: [] }
}

export interface CollectionPart extends Movie {
  media_type: string // movie
}

// https://api.themoviedb.org/3/collection/{collection_id}
export interface CollectionDetail extends Collection {
  overview: string
  parts: CollectionPart[]
}