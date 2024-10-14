import { UNSAFE_ErrorResponseImpl, useRouteError } from 'react-router-dom'
import './style.css'

export default function ErrorPage() {
  const error = useRouteError() as UNSAFE_ErrorResponseImpl

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an expected error has occured.</p>
      <p className="muted">
        {error.status} - {error.statusText}
      </p>
    </div>
  )
}
