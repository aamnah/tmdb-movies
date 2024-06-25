import './MovieCard.scss'

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { fetchMovieDetails } from '../api/api'
import { MovieDetail } from '../api/tmdb_api.types'
import { getGenreNames } from '../helpers'

interface Props {
  id: number
  title: string
  overview: string
  posterPath: string
  rating: number
}

export default function MovieCard({ id, title, posterPath, rating }: Props) {
  const [movieDetails, setMovieDetails] = useState<MovieDetail>()

  useEffect(() => {
    fetchMovieDetails(id)
      .then((movie) => setMovieDetails(movie))
      .catch((e) =>
        console.error(`CThere was an error with setting movie; , ${e}`)
      )
  }, [id])

  return (
    <>
      <Link
        className="MovieCard w-full flex flex-row sm:flex-col self-stretch overflow-hidden max-h-[231px] sm:max-h-full border-2 border-transparent rounded-2xl hover:cursor-pointer bg-white/5 text-white/50 transition-all hover:bg-carmine hover:text-white"
        to={`/movie/${id}`}
      >
        <img
          src={posterPath}
          alt={title}
          className="max-h-[231px] sm:max-h-full rounded-l-2xl sm:rounded-none sm:rounded-t-2xl"
        />
        <div className="p-3">
          <header className="flex flex-col mb-3 md:flex-row md:justify-between md:content-center md:items-center">
            <h2 className="m-0 mb-2 text-white/80">{title}</h2>
            <p className="flex gap-1.5 items-center">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
                role="presentation"
              >
                <path
                  d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"
                  fill="#f5c518"
                ></path>
              </svg>
              <span>{rating}</span>
            </p>
          </header>

          {movieDetails
            ? getGenreNames(movieDetails.genres).map((item: string, index) => (
                <small
                  key={index}
                  className="[&:not(:last-child)]:after:content-['\2022'] after:ml-0.5 after:text-slate-700 text-slate-400"
                >
                  {' '}
                  {item}{' '}
                </small>
              ))
            : null}
        </div>
      </Link>
    </>
  )
}

// TODO: [ ] Add a word count function to trim overview text that is too long
// https://linuxhint.com/word-count-using-javascript/
// https://answers.acrobatusers.com/How-set-word-limit-character-limit-text-field-q109228.aspx

{
  /* <MovieCard
          id={615656}
          title="Meg 2: The Trench"
          overview="An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival."
          posterPath={getPosterURL({path: `/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg`, width: 300})}
          rating={7}
        /> */
}
