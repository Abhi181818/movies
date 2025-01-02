// Card.js

import React, { useContext } from "react";
import movieData from "../Data.json";
import { WatchlistContext } from "./WatchlistContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
  const { addToWatchlist } = useContext(WatchlistContext);
  const handleAddToWatchList = (id, title, image, description) => {
      addToWatchlist(id, title, image, description);
      toast.success('Added to Watchlist', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
  };

  return (
    <div className="container p-4 bg-dark">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movieData.map((movie, index) => (
          <div key={index} className="col">
            <div className="card h-60">
              <img
                src={movie.image}
                className="card-img-top"
                        alt={movie.title}
                        height={300}
              />
              <div className="card-body bg-dark">
                <h5
                  className="card-title text-white"
                  style={{ fontWeight: "bold" }}
                >
                            {movie.title.length >13 ? movie.title.substring(0, 14) + '...' : movie.title}
                </h5>
                <button
                  className="btn "
                  style={{ backgroundColor: "#7c2012", color: "whitesmoke" }}
                  onClick={() =>
                    handleAddToWatchList(
                      movie.id,
                      movie.title,
                      movie.image,
                      movie.description
                    )
                  }
                >
                  Add To Watchlist
                        </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
