import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <>
      <header>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li className={css.item}>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
        <hr style={{ width: "100%" }} />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
