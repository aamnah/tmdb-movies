import { useRouteError } from 'react-router-dom'

import { getErrorMessage } from '../helpers'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="max-w-2xl mx-auto mt-12">
      <h1 className="text-4xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <strong>{getErrorMessage(error)}</strong>
      </p>
    </div>
  )
}
