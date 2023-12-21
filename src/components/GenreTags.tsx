import './GenreTags.scss'

interface GenreTagsProps {
  genres: string[]
}
export default function GenreTags({ genres }: GenreTagsProps) {
  // let genres = useContext(AppContext)

  function renderGenres(genresArray: string[]) {
    // console.log(`movieGenres inside GenerateTags`, genresArray)

    const genreTags = genresArray.map((genre, index) => {
      // console.log(`Genre Name:`, genre)
      // console.log(genresArray[genre])
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
  return (
    <div className="flex flex-row flex-wrap gap-2 mt-2">
      {renderGenres(genres)}
    </div>
  )
}
