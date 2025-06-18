import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isActive = useMemo(() => pathname === "/", [pathname]);

  return (
    <header>
      <div className="bg-gray-950">
        <div className="mx-auto container px-4 py-6">
          <div className="flex justify-between items-center">
            <img src="/logo.svg" alt="" className="w-16" />

            <nav className="flex gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold uppercase"
                    : "text-white font-bold uppercase"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold uppercase"
                    : "text-white font-bold uppercase"
                }
              >
                Favorites
              </NavLink>
            </nav>
          </div>

          {isActive && (
            <form className="md:w-1/2 2xl:w-1/3 my-10 p-10 rounded-xl bg-orange-400 space-y-6">
              <div className="space-y-4">
                <label
                  htmlFor="ingredient"
                  className="block text-white font-extrabold uppercase"
                >
                  Name or Ingredient
                </label>
                <input
                  type="text"
                  name="ingredient"
                  id="ingredient"
                  placeholder="Name or ingredient. e.g. Vodka, Tequila, coffee"
                  className="focus:outline-none bg-white p-3 rounded-lg w-full"
                />
                <label 
                    htmlFor="category"
                    className="block text-white font-extrabold uppercase"
                >Category</label>
                <select 
                    name="category" 
                    id="category"
                    className="focus:outline-none bg-white p-3 rounded-lg w-full"
                >
                    <option value="">-- Select a category --</option>
                </select>
              </div>
              <input 
                type="submit" 
                value="Search Recipes"
                className="cursor-pointer w-full bg-orange-800 hover:bg-orange-900 rounded-lg p-2 text-white uppercase font-extrabold"
                />
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
