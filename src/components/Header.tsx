import { useEffect, useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import HeaderForm from "./HeaderForm";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  const fetchCategories = useAppStore((state) => state.fetchCategories);

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <header>
      <div className="mx-auto container px-4 py-6">
        <div className="flex justify-between items-center">
          <img src="/logo.svg" alt="" className="w-16" />
          <nav className="flex gap-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-extrabold uppercase px-3 py-3 bg-white/5 backdrop-blur-xl rounded-lg"
                  : "text-white font-bold uppercase px-3 py-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-bold uppercase px-3 py-3 bg-white/5 backdrop-blur-xl rounded-lg"
                  : "text-white font-bold uppercase px-3 py-3"
              }
            >
              Favorites
            </NavLink>
          </nav>
        </div>

        {isHome && <HeaderForm />}
      </div>
    </header>
  );
}
