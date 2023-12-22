// import axios from 'axios'
import type { Config, Context } from '@netlify/edge-functions'

// Note that environment variables declared in a Netlify configuration file (netlify.toml) are not available to functions.
// process.env vars are also not available
// Netlify Functions have access to environment variables in the runtime environment via the Netlify.env global object.

export default async function fetchMovieDetails(request: Request, context: Context) {
  const API_TOKEN = Netlify.env.get('REACT_APP_TMDB_API_TOKEN')
  const API_ENDPOINT = `https://api.themoviedb.org/3/movie/${context.params.movieId}?append_to_response=videos`

  try {
    const response = await fetch(API_ENDPOINT, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    })
    const data = await response.json()
    console.log(`data:`, data)
    console.log(`data.results:`, data.results)
    console.log(`Movie Details: ${data.results.original_title}`, data.results)
    return Response.json(
      { data },
      // Add a second parameter to `Response.json`
      // where we can provide our CORS headers
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,OPTIONS',
          'Cache-Control': 'public, s-maxage=86400', // 86400s = 24hrs = 1 day
        },
      }
    )
  } catch (error) {
    console.error(`There was an error with fetching movie details: \n${error}`)
    return Response.json({ error: 'Failed fetching data' }, { status: 500 })
  }
}

export const config: Config = { path: '/api/movie/:movieId' }
