// import axios from 'axios'
import type { Config, Context } from '@netlify/edge-functions'

// Note that environment variables declared in a Netlify configuration file (netlify.toml) are not available to functions.
// process.env vars are also not available
const API_ENDPOINT = 'https://api.themoviedb.org/3/movie/now_playing'

export default async function fetchNowPlayingMovies(
  request: Request,
  context: Context
) {
  const REQUEST_TOKEN = request.headers.get('X-API-Key')
  // Netlify Functions have access to environment variables in the runtime environment via the Netlify.env global object.
  const API_TOKEN = Netlify.env.get('VITE_TMDB_API_TOKEN')

  try {
    const response = await fetch(API_ENDPOINT, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
    const data = await response.json()
    console.log(`Now Playing Movies:`, data.results)
    return Response.json(
      { data },
      // Add a second parameter to `Response.json`
      // where we can provide our CORS headers
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS',
        },
      }
    )
  } catch (error) {
    console.error(
      `There was an error with fetching Now Playing movies: \n${error}`
    )
    return Response.json({ error: 'Failed fetching data' }, { status: 500 })
  }
}

export const config: Config = { path: '/api/now_playing' }
