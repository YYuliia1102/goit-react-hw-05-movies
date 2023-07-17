import { NavLink, Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import styles from './App.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav>
          <NavLink to="/" className={styles.navLink} activeClassName={styles.activeNavLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={styles.navLink} activeClassName={styles.activeNavLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
        </Routes>
      </main>
    </div>
  );
};
