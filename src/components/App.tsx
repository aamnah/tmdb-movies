import { useEffect, useState } from 'react'
import AppHeader from './AppHeader'
import MovieListItem from './MovieListItem'
import { getPosterURL } from './helpers'
import { fetchNowPlayingMovies } from '../api/api'

import './App.scss'

// const youtube_vid = `https://www.youtube.com/watch?v=19ikl8vy4zs`

function App() {
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
    <div className="App">
      <AppHeader />
      <div className="MovieList">
        {loading ? (
          <p>Loading..</p>
        ) : nowPlayingMovies ? (
          nowPlayingMovies.map((movie: any, index: number) => {
            let { id, title, overview, poster_path, vote_average } = movie
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

        {/* <MovieListItem
          id={615656}
          title="Meg 2: The Trench"
          overview="An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
          posterPath={getPosterURL({path: `/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg`, width: 300})}
          rating={7}
        /> */}
      </div>
    </div>
  )
}

export default App
