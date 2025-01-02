import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import { AuthContext } from "../Login/AuthContext";
import { WatchlistContext } from "../Card/WatchlistContext";

// Mock AuthContext values for testing
const mockAuthContext = {
  username: "testuser",
  isLoggedIn: true,
  login: jest.fn(),
  logout: jest.fn(),
};

// Mock WatchlistContext values for testing
const mockWatchlistContext = {
  watchlist: [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ],
};

const AuthProvider = ({ children }) => (
  <AuthContext.Provider value={mockAuthContext}>
    {children}
  </AuthContext.Provider>
);

const WatchlistProvider = ({ children }) => (
  <WatchlistContext.Provider value={mockWatchlistContext}>
    {children}
  </WatchlistContext.Provider>
);

describe("NavBar Component", () => {
  it("renders navbar links and logout button when logged in", () => {
    render(
      <Router>
        <AuthProvider>
          <WatchlistProvider>
            <NavBar />
          </WatchlistProvider>
        </AuthProvider>
      </Router>
    );
    expect(screen.getByText(/Popular Movies/i)).toBeInTheDocument();
    expect(screen.getByText(/Top Rated/i)).toBeInTheDocument();
    expect(screen.getByText(/Watchlist/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Review/i)).toBeInTheDocument();
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();
    expect(screen.getByText(/Welcome, testuser!/i)).toBeInTheDocument();
  });

    it("renders login button when not logged in", async() => {
        const mockAuthContextNotLoggedIn = {
            username: "",
            isLoggedIn: false,
            login: jest.fn(),
            logout: jest.fn(),
            };
      render(
        <Router>
        <AuthProvider value={mockAuthContextNotLoggedIn}>
          <WatchlistProvider>
            <NavBar />
          </WatchlistProvider>
        </AuthProvider>
      </Router>
    );
    fireEvent.click(screen.getByTestId("logout-button"));
    // await waitFor(() => {
    //   expect(mockAuthContextNotLoggedIn.logout).toHaveBeenCalledTimes(1);
    // });
    expect(screen.getByTestId("login-button")).toBeInTheDocument();
  });

  it("calls logout function when logout button is clicked", async () => {
    render(
      <Router>
        <AuthProvider>
          <WatchlistProvider>
            <NavBar />
          </WatchlistProvider>
        </AuthProvider>
      </Router>
    );

    fireEvent.click(screen.getByTestId("logout-button"));
    await waitFor(() => {
      expect(mockAuthContext.logout).toHaveBeenCalledTimes(1);
    });
  });
});
