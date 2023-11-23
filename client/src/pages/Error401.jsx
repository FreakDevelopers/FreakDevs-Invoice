import React from 'react'
import { Link } from 'react-router-dom'

function Error401() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">401</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Access Denied.</p>
                <p className="lead">
                    Unauthorized access. Please login first.
                  </p>
                <Link to="/" className="btn btn-primary">Go Home</Link>
            </div>
        </div>
  )
}

export default Error401