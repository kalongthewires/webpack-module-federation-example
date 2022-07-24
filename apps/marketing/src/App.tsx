import { Link, Outlet } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div className="marketing">
      <header className="global-header">
        <div className="global-header__content">
          <h1 className="brand">Marketing App</h1>

          <nav className="global-nav">
            <ul className="global-nav__links">
              <li className="global-nav__item">
                <Link className="global-nav__link" to="/">
                  Home
                </Link>
              </li>
              <li className="global-nav__item">
                <Link className="global-nav__link" to="pricing">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
