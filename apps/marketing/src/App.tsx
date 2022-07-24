import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Marketing</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="pricing">Pricing</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
