import axios, { AxiosResponseTransformer } from 'axios'


const TMDB_API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'

const TMDB_API_ENDPOINT = {
  movie_now_playing: '/movie/now_playing',
  movie_genre_list: '/genre/movie/list',
  movie_videos: `/movie/{movie_id}/videos`,
}

export async function fetchNowPlayingMovies() {
  const response = await fetch('/api/now_playing')
  const json = await response.json()

  return json.data.results
}

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
    return response.data
  } catch (error) {
    console.error(`There was an error with the Axios request: \n${error}`)
    return error
  }
}
