import { useMemo } from "react"
import { useAppStore } from "../stores/useAppStore"
import DrinkCard from "../components/DrinkCard"

export default function IndexPage() {

  const drinks = useAppStore(state => state.drinks)

  const hasDrinks = useMemo(() => drinks.drinks.length,[drinks])

  return (

    <main className="mx-auto container py-6">
        <h1 className="text-white text-5xl font-extrabold mt-4">Recipes</h1>
        { hasDrinks ? (
          <>
            {drinks.drinks.map(drink => (
              <DrinkCard 
                key={drink.idDrink}
                drink={drink}
              />
            ))}
          </>
        ) : (
          <h2 
            className=" text-white text-center text-xl mt-8"
          >There are still no recipes to display, please use the form to search for recipes.</h2>
        )}
    </main>
  )
}
