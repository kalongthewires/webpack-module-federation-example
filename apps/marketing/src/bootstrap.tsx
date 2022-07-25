import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Pricing from "./Pricing";

// TODO: Need to include CSS in web component
class MarketingApp extends HTMLElement {
  shadowRoot: ShadowRoot | null;

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.render();
  }

  render = () => {
    if (!this.shadowRoot) {
      return;
    }

    const root = ReactDOM.createRoot(this.shadowRoot);

    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  };
}

customElements.define("marketing-app", MarketingApp);
