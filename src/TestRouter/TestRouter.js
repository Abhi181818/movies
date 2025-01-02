// TestRouter.js

import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes,useParams } from 'react-router-dom';

const Home = () => <h1>Home page</h1>;
const About = () => <h1>About page</h1>;
const Contact = () => {
  const { name } = useParams();
  return (
    <h1 data-testid="contact-name">{name}</h1>
  );
};

const TestRouter = () => {
  return (
    <>
      <nav data-testid="navbar">
        <Link data-testid="home-link" to="/">Home</Link>
        <Link data-testid="about-link" to="/about">About</Link>
        <Link data-testid="contact-link" to="/contact/John Doe">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/:name" element={<Contact />} />
      </Routes>
    </>
  );
};

export default TestRouter;
