import './GenreTags.scss'

interface Props {
  genres: string[]
}

function renderGenres(genresArray: string[]) {
  const genreTags = genresArray.map((genre, index) => {
    return (
      <span
        className="GenreTagItem flex justify-center content-center items-center border rounded-lg py-1 px-2"
        key={index}
      >
        <small>{genre}</small>
      </span>
    )
  })
  return genreTags
}

export default function GenreTags({ genres }: Props) {
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-2">
      {renderGenres(genres)}
    </div>
  )
}
