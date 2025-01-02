import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Login/AuthContext";
import { WatchlistContext } from "../Card/WatchlistContext";

function NavBar() {
  const watchlist = useContext(WatchlistContext);
  const { username, isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <nav className="navbar fixed-top bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="../logo-removebg-preview.png" alt="" height="35" width="50" className="d-inline-block align-text-top" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/popular-movies">
                Popular Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/top-rated">
                Top Rated
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">
                Watchlist
                <span className="badge badge-pill badge-primary">
                  {watchlist.watchlist.length}
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-review">
                Add Review
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span className="text-light me-3">Welcome, {username}!</span>
              <button className="btn btn-danger" onClick={logout} data-testid="logout-button">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-success" data-testid="login-button" role="login-button">
              Login
            </Link>
          )}

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
