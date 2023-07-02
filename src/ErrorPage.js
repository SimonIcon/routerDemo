import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <h1>Something went wrong.</h1>
            <p><code>{error.status}: {error.statusText}</code></p>
            <Link href="/">go back home</Link>
        </div>
    )
}

export default ErrorPage