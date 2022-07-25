import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Container</h1>
      <Outlet />
    </>
  );
};

export default App;
