import { Link } from "react-router-dom";

export function AppLayout({ children }) {
  return (
    <>
      <header className="site-header">
        <Link to="/">Fayidh</Link>
        <nav aria-label="Main navigation">
          <Link to="/browse">Browse</Link>
          <Link to="/my-listings">My Listings</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">Fayidh — Phase 4 starter</footer>
    </>
  );
}

// TODO: implement role-based access checks with M1 and M5.
export function RequireRole({ children }) { return children; }
