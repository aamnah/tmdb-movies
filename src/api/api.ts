import axios from 'axios'

const TMDB_API_TOKEN: string = import.meta.env.VITE_TMDB_API_TOKEN
console.log('🚀 ~ file: api.ts:4 ~ TMDB_API_TOKEN:', TMDB_API_TOKEN)
console.log(
  '🚀 ~ file: api.ts:4 ~ import.meta.env.VITE_TMDB_API_TOKEN:',
  import.meta.env.VITE_TMDB_API_TOKEN
)
const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'

// const TMDB_API_ENDPOINT = {
//   movie_now_playing: '/movie/now_playing',
//   movie_genre_list: '/genre/movie/list',
//   movie_videos: `/movie/{movie_id}/videos`,
// }

export async function fetchNowPlayingMovies() {
  try {
    const response = await fetch('/api/now_playing')
    const json = await response.json()

    // console.log(`Now Playing Movies:`, response.data.results)

    return json.data.results
  } catch (error) {
    console.error(`There was an error with the Axios request: \n${error}`)
    return error
  }
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
