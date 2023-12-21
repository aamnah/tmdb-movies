import { useEffect, useState } from 'react'
import MovieListItem from '../components/MovieListItem'
import { getPosterURL } from '../helpers'
import { fetchNowPlayingMovies } from '../api/api'

export default function NowPlayingPage() {
  const [nowPlayingMovies, setNowPlayingMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchNowPlayingMovies()
      .then((results: any) => {
        setNowPlayingMovies(results)
        setLoading(false)
      })
      .catch((error: any) => console.error(error))
  }, [])

  return (
    <div className="MovieList md:columns-3 lg:columns-4 xl:columns-6">
      {loading ? (
        <p>Loading..</p>
      ) : nowPlayingMovies ? (
        nowPlayingMovies.map((movie: any, index: number) => {
          const { id, title, overview, poster_path, vote_average } = movie
          return (
            <>
              <MovieListItem
                key={index}
                id={id}
                title={title}
                overview={overview}
                posterPath={getPosterURL({ path: poster_path, width: 300 })}
                rating={vote_average.toFixed(1)}
              />
            </>
          )
        })
      ) : (
        <p>Could not find any movies</p>
      )}
    </div>
  )
}
