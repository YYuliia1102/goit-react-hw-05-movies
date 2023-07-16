import { NavLink, Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';


export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/search">Search</NavLink> */}
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
          {/* <Route path="/posts/:postId/*" element={<PostDetails />} /> */}
        </Routes>
      </main>
    </div>
  );
};
