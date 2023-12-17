import axios from 'axios'

const TMDB_API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGU5ODU5OWYwMWExZDE5MzQxZDk2MTgyNjg2ZDYyOCIsInN1YiI6IjY0ZmM5ZDEwZGMxY2I0MDBiMGJiNGEyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T2-CgrGWkCRpSc-Ci8qH6w-5QEPBoMwRja2RUIwwsuw'

export async function fetchNowPlayingMovies() {
  // https://axios-http.com/docs/req_config
  try {
    let response = await axios({
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
