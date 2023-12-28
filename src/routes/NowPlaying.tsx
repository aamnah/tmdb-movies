import { useEffect, useState } from 'react'

import { fetchNowPlayingMovies } from '../api/api'
import { poster_sizes } from '../api/tmdb_api.types'
import CardList from '../components/CardList'
import MovieCard from '../components/MovieCard'
import { getPosterURL } from '../helpers'

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
    <CardList>
      {loading ? (
        <p>Loading..</p>
      ) : nowPlayingMovies ? (
        nowPlayingMovies.map((movie: any, index: number) => {
          const { id, title, overview, poster_path, vote_average } = movie
          return (
            <>
              <MovieCard
                key={index}
                id={id}
                title={title}
                overview={overview}
                posterPath={getPosterURL({
                  path: poster_path,
                  width: poster_sizes.w342,
                })}
                rating={vote_average.toFixed(1)}
              />
            </>
          )
        })
      ) : (
        <p>Could not find any movies</p>
      )}
    </CardList>
  )
}
