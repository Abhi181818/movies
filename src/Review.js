import React, { useState } from "react";
import NavBar from "./NavBar/NavBar";
import movieData from "../src/Data.json"; // Importing initial movie data

const Review = () => {
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store selected movie
  const [newReview, setNewReview] = useState(""); // State to store new review text
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setDropdownOpen(false); // Close dropdown after selecting a movie
  };

  const handleReviewSubmit = () => {
    if (!selectedMovie) {
      alert("Please select a movie first.");
      return;
    }

    if (newReview.trim() === "") {
      alert("Please enter a review.");
      return;
    }

    // Create a copy of movieData
    const updatedMovieData = [...movieData];

    // Find the selected movie by id and update its reviews
    const movieIndex = updatedMovieData.findIndex((movie) => movie.id === selectedMovie.id);
    if (movieIndex !== -1) {
      updatedMovieData[movieIndex].reviews.push({
        reviewer: "New Reviewer", // You can modify this to use actual user data
        quote: newReview,
        rating: 0, // You can modify this to use an actual rating
      });

      // Update state with the modified movieData
      setSelectedMovie(updatedMovieData[movieIndex]);
      alert("Review added successfully."); // Optional: Show a success message
    }

    // Normally, you would update the JSON file on a backend server using APIs
    // For local storage:
    // localStorage.setItem('movieData', JSON.stringify(updatedMovieData));
    // For backend server: Make an API call to update the JSON file
  };

  return (
    <div className="bg-dark text-white container-fluid text-center pt-4 pb-5">
      <div className="container bg-dark p-5">
        <NavBar />
        <div className="dropdown">
          <button
            className="btn btn-danger dropdown-toggle"
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown open/close
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : "false"}
          >
            {selectedMovie ? selectedMovie.title : "Select Movie"}
          </button>
          {dropdownOpen && (
            <div
              className="dropdown-menu show bg-dark"
              style={{
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "1000",
                minWidth: "100%",
                opacity:"0.7"
              }}
            >
              {movieData.map((movie) => (
                <a
                  key={movie.id}
                  className="dropdown-item bg-dark text-white"
                  onClick={() => handleMovieSelect(movie)}
                >
                  {movie.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      <br />
      <textarea
        placeholder="Enter your review"
        cols={100}
        rows={10}
        value={newReview}
        className="p-3"
        onChange={(e) => setNewReview(e.target.value)}
          style={{opacity:"0.7"}}
      ></textarea>
      <br />
      <button type="button" className="btn btn-outline-warning" onClick={handleReviewSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Review;
