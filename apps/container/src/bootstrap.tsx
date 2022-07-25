import ReactDOM from "react-dom/client";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";

const Marketing = React.lazy(() => import("./Marketing"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Marketing />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
