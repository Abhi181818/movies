import logo from "./logo.svg";
import "./App.css";
import Card from "./Card/Card";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import { WatchlistProvider } from "./Card/WatchlistContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import WatchListCards from "./Card/WatchListCards";
import Home from "./Homepage/Home";
import Review from "./Review";
import { AuthProvider } from "./Login/AuthContext";
import TopRated from "./TopRated/TopRated";
import PopularMovies from "./Popular/PopularMovies";
import TestRouter from "./TestRouter/TestRouter";
import Cards from "./CardsNew/Cards";

function App() {
  return (
    <div className="App bg-dark">
     <WatchlistProvider>
      <ToastContainer />
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/watchlist" element={<WatchListCards />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/add-review" element={<Review />} />
            <Route exact path="/top-rated" element={<TopRated />} />
            <Route path="/popular-movies" element={<PopularMovies/>} />
          </Routes>
        </AuthProvider>
      </WatchlistProvider> 
      {/* <TestRouter/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
