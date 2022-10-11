import React from 'react'
import { NavLink } from 'react-router-dom'
import "./CSS/ErrorPage.css"

const ErrorPage = () => {
  return (
    <div>
        <div className="container">
            <div>
                <h1>404</h1>
                <h2>
                    Page Not Found
                </h2>
                <p>
                    The page you are looking for might have been removed had its name changed or is temporarily unavailable.
                </p>
                <button className='btn'>
                    <NavLink to="/">Go To Home</NavLink>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage