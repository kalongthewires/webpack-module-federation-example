import { Global } from "@emotion/react";
import { Link, Outlet } from "react-router-dom";
import { fonts } from "../globalStyles";
import {
  brand,
  globalHeader,
  globalHeaderContent,
  globalNavItem,
  globalNavLink,
  globalNavLinks,
  pageContent,
  root,
} from "./styles";

const App = () => {
  return (
    <>
      <Global styles={fonts} />
      <div css={root}>
        <header css={globalHeader}>
          <div css={globalHeaderContent}>
            <h1 css={brand}>Marketing App</h1>

            <nav>
              <ul css={globalNavLinks}>
                <li css={globalNavItem}>
                  <Link css={globalNavLink} to="/">
                    Home
                  </Link>
                </li>
                <li css={globalNavItem}>
                  <Link css={globalNavLink} to="pricing">
                    Pricing
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main css={pageContent}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default App;
