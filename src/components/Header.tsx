import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header>
      <div className={isHome ? 'bg-[url(/Cocktail_Bg.webp)] bg-center bg-cover' : 'bg-gray-950'}>
        <div className="mx-auto container px-4 py-6">
          <div className="flex justify-between items-center">
            <img src="/logo.svg" alt="" className="w-16" />

            <nav className="flex gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-700 font-extrabold uppercase px-3 py-3 bg-white/30 backdrop-blur-lg rounded-lg"
                    : "text-white font-bold uppercase px-3 py-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-bold uppercase px-3 py-3 bg-white/15 backdrop-blur-lg rounded-lg"
                    : "text-white font-bold uppercase px-3 py-3"
                }
              >
                Favorites
              </NavLink>
            </nav>
          </div>

          {isHome && (
            <form className="md:w-1/2 2xl:w-1/3 my-10 p-10 rounded-xl backdrop-blur-lg space-y-6">
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
                className="cursor-pointer w-full bg-white/40 backdrop-blur-xl rounded-lg p-2 text-white uppercase font-extrabold"
                />
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
