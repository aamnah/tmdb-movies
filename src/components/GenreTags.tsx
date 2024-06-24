interface Props<T> {
  props?: T
  genres: string[]
  className?: string
}

function renderGenres(genresArray: string[]) {
  const genreTags = genresArray.map((genre, index) => {
    return (
      <span
        className="flex justify-center content-center items-center border rounded-lg py-1 px-2 border-white/5 bg-white/5"
        key={index}
      >
        <small>{genre}</small>
      </span>
    )
  })
  return genreTags
}

export default function GenreTags({ genres, className, ...rest }: Props<T>) {
  return (
    <div
      {...rest}
      className={`flex flex-row flex-wrap gap-2 mt-2 ${className}`}
    >
      {renderGenres(genres)}
    </div>
  )
}
