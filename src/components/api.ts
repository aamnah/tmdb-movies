import axios from 'axios'

const TMDB_API_TOKEN: string = import.meta.env.VITE_TMDB_API_TOKEN
console.log(
  '🚀 ~ file: api.ts:4 ~ import.meta.env.VITE_TMDB_API_TOKEN:',
  import.meta.env.VITE_TMDB_API_TOKEN
)
console.log('🚀 ~ file: api.ts:4 ~ TMDB_API_TOKEN:', TMDB_API_TOKEN)

export async function fetchNowPlayingMovies() {
  // https://axios-http.com/docs/req_config
  try {
    const response = await axios({
      url: `/movie/now_playing`,
      method: `get`,
      baseURL: `https://api.themoviedb.org/3`,
      headers: {
        Authorization: `Bearer ${TMDB_API_TOKEN}`,
      },
    })
    // console.log(`Now Playing Movies:`, response.data.results)
    return response.data.results
  } catch (error) {
    console.error(`There was an error with the Axios request: \n${error}`)
    return error
  }
}
