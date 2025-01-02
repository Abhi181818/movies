import React, { useContext } from "react";
import NavBar from "../NavBar/NavBar";
import { WatchlistContext } from "./WatchlistContext";
import Footer from "../Footer/Footer";

export default function WatchListCards() {
  const watchlist = useContext(WatchlistContext);
  const handleRemoveFromWatchList = (id) => {
    watchlist.removeFromWatchlist(id);
  };

  return (
    <div >
      <h2 style={{ color: "whitesmoke" ,paddingTop:"80px"}}>My WatchList</h2>
      <div className="bg-dark container">
        <NavBar />
        <div className=" row row-cols-1 row-cols-md-4 gap-4">
          {watchlist.watchlist.map((movie, index) => (
            <div className="card text-bg-secondary mb-3" style={{ width: 500 }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={movie.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.description}</p>
                    <p className="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                    <button
                      class="btn btn-danger"
                      type="button"
                      onClick={() => handleRemoveFromWatchList(movie.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
