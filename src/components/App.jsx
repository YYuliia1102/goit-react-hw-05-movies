import React, { Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';

const HomePage = React.lazy(() => import('pages/HomePage'));
const Movies = React.lazy(() => import('pages/Movies'));
const MovieDetails = React.lazy(() => import('pages/MovieDetails'));

export const App = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" className={styles.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
