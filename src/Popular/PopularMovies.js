import React from "react";
import NavBar from "../NavBar/NavBar";

const PopularMovies = () => {
  const popularMovies = [
    {
      id: 1,
      title: "Spider-Man: No Way Home",
      description:
        "Peter Parker's identity is revealed, and he asks Doctor Strange for help, leading to the multiverse's collapse.",
      image:
        "https://www.themoviedb.org/t/p/original/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
    },
    {
      id: 2,
      title: "Dune",
      description:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
      image:
        "https://www.themoviedb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    },
    {
      id: 3,
      title: "No Time to Die",
      description:
        "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      image:
        "https://m.media-amazon.com/images/I/812C4F6VxEL.jpg",
    },
    {
      id: 4,
      title: "The Matrix Resurrections",
      description:
        "Return to a world of two realities: one, everyday life; the other, what lies behind it.",
      image:
        "https://m.media-amazon.com/images/I/71wu4dqZrcL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 5,
      title: "Black Widow",
      description:
        "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
      image:
        "https://www.themoviedb.org/t/p/original/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    },
  ];
  return (
    <div className="container" style={{ paddingTop: "90px" }}>
      <NavBar />
      <div className="container">
        <h1 className="text-white">Popular Movies</h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {popularMovies.map((movie, index) => (
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
                    {movie.title.length > 13
                      ? movie.title.substring(0, 14) + "..."
                      : movie.title}
                  </h5>
                  <button
                    className="btn "
                    style={{ backgroundColor: "#7c2012", color: "whitesmoke" }}
                  >
                    Add To Watchlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularMovies;
