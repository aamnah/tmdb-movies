// We are assuming that the API response are trusted
// and are in the correct format
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import axios from 'axios'
import { MovieDetail, MovieList } from './tmdb_api.types'
import { getErrorMessage } from '../helpers'

const TMDB_API_TOKEN: string = import.meta.env.VITE_TMDB_API_TOKEN

const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'

// const TMDB_API_ENDPOINT = {
//   movie_now_playing: '/movie/now_playing',
//   movie_genre_list: '/genre/movie/list',
//   movie_videos: `/movie/{movie_id}/videos`,
// }

interface ApiResponse {
  data: unknown
  error?: string
}

async function typedFetch<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request)
  const body = await response.json()
  return body
}

export async function fetchNowPlayingMovies() {
  try {
    const response = await typedFetch<ApiResponse>('/api/now_playing')
    // const response = await fetch('/api/now_playing')

    const data = response.data as MovieList
    const results: MovieList['results'] = data.results
    // console.log(`Now Playing Movies:`, results)

    return results
  } catch (error) {
    console.error(
      `There was an error with the Fetch request: \n${getErrorMessage(error)}`
    )
    return error
  }
}

export async function fetchPopularMovies() {
  try {
    const response = await typedFetch<ApiResponse>('/api/popular')
    const data = response.data as MovieList
    const results: MovieList['results'] = data.results
    // console.log(`Popular Movies:`, results)
    return results
  } catch (error) {
    console.error(
      `There was an error with the Fetch request: \n${getErrorMessage(error)}`
    )
    return error
  }
}

export async function fetchTopRatedMovies() {
  try {
    const response = await typedFetch<ApiResponse>('/api/top_rated')
    const data = response.data as MovieList
    const results: MovieList['results'] = data.results
    // console.log(`Top Rated Movies:`, results)
    return results
  } catch (error) {
    console.error(
      `There was an error with the Fetch request: \n${getErrorMessage(error)}`
    )
    return error
  }
}

export async function fetchUpcomingMovies() {
  try {
    const response = await typedFetch<ApiResponse>('/api/upcoming')
    const data = response.data as MovieList
    const results: MovieList['results'] = data.results
    // console.log(`Upcoming Movies:`, response.data.results)
    return results
  } catch (error) {
    console.error(
      `There was an error with the Fetch request: \n${getErrorMessage(error)}`
    )
    return error
  }
}

// export async function fetchMovieDetails(movieId: number) {
//   try {
//     const response = await typedFetch(`/api/movie/${movieId}`)
//     // console.log(`Movie Details: ${response.data.original_title}`, response.data)
//     return response.data
//   } catch (error) {
//     console.error(`There was an error with the Fetch request: \n${getErrorMessage(error)}`)
//     return error
//   }
// }

export async function fetchMovieDetails(movieId: number) {
  // https://axios-http.com/docs/req_config
  try {
    const response = await axios({
      url: `/movie/${movieId}?append_to_response=videos`,
      method: `get`,
      baseURL: `${TMDB_API_BASE_URL}`,
      headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
      },
    })
    // console.log(`Movie Details: ${response.data.original_title}`, response.data)
    return response.data as MovieDetail
  } catch (error) {
    console.error(
      `There was an error with the Axios request: \n${getErrorMessage(error)}`
    )
    return error
  }
}
