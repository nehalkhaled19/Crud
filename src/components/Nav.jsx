import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to=''>Navbar</Link>
        {/* <a className="navbar-brand" href="#">Navbar </a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
            <li className="nav-item">
              {/* <a className="navbar-brand" aria-current="page" href="#">Home</a> */}
              <Link className="navbar-brand" to=''>Home</Link>

            </li>

          </ul>

        </div>
      </div>
    </nav>
  </>
}
