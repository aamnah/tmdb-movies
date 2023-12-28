import { Link } from 'react-router-dom'

interface Props<T> {
  props?: T
  id: number
  title: string
  overview: string
  posterPath: string
  rating: number
}

export default function Card({
  id,
  title,
  posterPath,
  rating,
  ...rest
}: Props<T>) {
  return (
    <Link to={`/movie/${id}`} className="" {...rest}>
      <img src={posterPath} alt={title} className="rounded-xl" />
      <div>
        <h2 className="m-0 mb-2 ">{title}</h2>
        <span>
          <strong>{rating}</strong>
          <small> / 10</small>
        </span>
      </div>
    </Link>
  )
}
