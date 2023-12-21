import { useEffect, useState } from 'react'
import GenreTags from './GenreTags'
import './MovieListItem.scss'
import { fetchMovieDetails } from '../api/api'
import ReactModal from 'react-modal'
import { getMovieTrailer } from './helpers'
import Youtube from './Youtube'

interface MovieListItemProps {
  id: number
  title: string
  overview: string
  posterPath: string
  rating: number
}

export interface Movie {
  // use an index signature if you don't know properties beforehand
  // useful when dealing with random data returned by an API
  // and you don't want to explicitly type everything
  [key: string]: any
}

function getGenreNames(genresArray: any) {
  let genreNames: string[] = []
  genresArray.map((genre: { id: number; name: string }) => {
    genreNames.push(genre.name)
  })
  return genreNames
}

export default function MovieListItem({
  id,
  title,
  overview,
  posterPath,
  rating,
}: // openModal,
// closeModal,
// isModalOpen,
MovieListItemProps) {
  const [movieDetails, setMovieDetails] = useState<Movie>()
  const [movieTrailer, setMovieTrailer] = useState({
    name: '',
    url: '',
    id: '',
  })
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)

  async function getMovieDetails() {
    let details = await fetchMovieDetails(id)

    if (details) {
      setMovieDetails(details)
      return details
    } else {
      console.error(`Could not get movie details`)
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  // let movieTrailer = { name: '', url: '', id: '' }
  if (movieDetails && movieDetails.videos.results) {
    // movieTrailer = getMovieTrailer(movieDetails.videos.results)
    getMovieTrailer(movieDetails.videos.results).then((results) =>
      setMovieTrailer(results)
    )
  }

  return (
    <>
      <ReactModal
        isOpen={modalIsOpen}
        // style={customStyles}
        className="Modal"
        overlayClassName="ModalOverlay"
        // contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="ModalCloseButton">
          close &#10060;
        </button>
        <Youtube videoId={movieTrailer.id} width="100%" height="720" />
      </ReactModal>
      <div className="MovieListItem">
        <img src={posterPath} alt={title} className="MovieListItem__Poster" />
        <div className="MovieListItem__Details">
          <header>
            <h2 className="MovieListItem__Title">{title}</h2>
            <span>
              <strong>{rating}</strong>
              <small> / 10</small>
            </span>
          </header>

          {movieDetails ? (
            <GenreTags genres={getGenreNames(movieDetails.genres)} />
          ) : null}

          {movieTrailer ? (
            <p className="MovieListItem__Trailer">
              <svg
                viewBox="0 0 512 512"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M419.264 78H92.7364C82.9968 78.0111 73.6593 81.8851 66.7723 88.772C59.8854 95.6589 56.0114 104.996 56.0003 114.736L56 396.795C56 406.544 59.8724 415.892 66.7654 422.785C73.6584 429.678 83.0074 433.551 92.7555 433.551H419.244C428.992 433.551 438.341 429.678 445.234 422.785C452.127 415.892 456 406.544 456 396.795L456 114.736C455.989 104.996 452.115 95.659 445.228 88.772C438.341 81.8851 429.004 78.0111 419.264 78ZM286.285 141.164L250.136 95.7778H329.629L365.779 141.164H286.285ZM263.557 141.164H184.063L147.913 95.7778H227.407L263.557 141.164ZM438.222 114.736V141.164H388.507L352.358 95.7778H419.264C424.29 95.7831 429.109 97.7822 432.664 101.336C436.218 104.891 438.217 109.71 438.222 114.736ZM73.778 114.736C73.7834 109.71 75.7825 104.891 79.3367 101.336C82.8909 97.7822 87.71 95.7831 92.7364 95.7778H125.185L161.334 141.164H73.778V114.736ZM342.165 296.513L217.08 368.731C216.236 369.218 215.279 369.475 214.305 369.475C213.331 369.475 212.374 369.218 211.53 368.731C210.686 368.244 209.986 367.544 209.498 366.7C209.011 365.856 208.755 364.899 208.755 363.925V219.489C208.755 218.514 209.011 217.557 209.498 216.714C209.986 215.87 210.686 215.169 211.53 214.682C212.374 214.195 213.331 213.939 214.305 213.939C215.279 213.939 216.236 214.196 217.08 214.683L342.165 286.901C343.009 287.388 343.71 288.088 344.197 288.932C344.684 289.776 344.94 290.733 344.94 291.707C344.94 292.681 344.684 293.638 344.197 294.482C343.71 295.326 343.009 296.026 342.165 296.513Z"
                  fill="currentColor"
                />
              </svg>
              <a
                // href={movieTrailer.url}
                target="_blank"
                rel="noreferrer"
                onClick={() => openModal()}
              >
                {movieTrailer.name}
              </a>
            </p>
          ) : null}

          {movieDetails ? (
            <p className="MovieListItem__Tagline">{movieDetails.tagline}</p>
          ) : null}

          <p className="MovieListItem__Overview">{overview}</p>
        </div>
      </div>
    </>
  )
}

// TODO: [ ] Add a word count function to trim overview text that is too long
// https://linuxhint.com/word-count-using-javascript/
// https://answers.acrobatusers.com/How-set-word-limit-character-limit-text-field-q109228.aspx
