import axios, { AxiosResponseTransformer } from 'axios'

const TMDB_API_TOKEN = process.env.REACT_APP_TMDB_API_TOKEN
console.log('🚀 ~ file: api.ts:4 ~ TMDB_API_TOKEN:', TMDB_API_TOKEN)
console.log(
  '🚀 ~ file: api.ts:4 ~ process.env.REACT_APP_TMDB_API_TOKEN:',
  process.env.REACT_APP_TMDB_API_TOKEN
)
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'



const TMDB_API_ENDPOINT = {
  movie_now_playing: '/movie/now_playing',
  movie_genre_list: '/genre/movie/list',
  movie_videos: `/movie/{movie_id}/videos`,
}

export default async function fetchTmdbData(
  endpoint: string,
  transformResponse?: AxiosResponseTransformer
) {
  // https://axios-http.com/docs/req_config
  try {
    const response = await axios({
      url: endpoint,
      method: `get`,
      baseURL: `${TMDB_API_BASE_URL}`,
      headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
      },
      transformResponse: (response) => {
        // Do whatever you want to transform the data
        // e.g. convert the genres array of objects into object of objects
        // easier to get values by ID that way
        return response
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(`There was an error with the Axios request: \n${error}`)
    return error
  }
}

export function fetchNowPlayingMovies(
  endpoint = TMDB_API_ENDPOINT.movie_now_playing
) {}

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
      // transformResponse: (response) => {
      //   // Do whatever you want to transform the data
      //   // e.g. convert the genres array of objects into object of objects
      //   // easier to get values by ID that way
      //   return response
      // },
    })
    console.log(`Movie Details: ${response.data.original_title}`, response.data)
    return response.data
  } catch (error) {
    console.error(`There was an error with the Axios request: \n${error}`)
    return error
  }
}
