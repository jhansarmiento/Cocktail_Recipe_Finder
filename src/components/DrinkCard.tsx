import { useAppStore } from "../stores/useAppStore"
import type { DrinkApiResponse } from "../types"

type DrinkCardProps = {
    drink: DrinkApiResponse
}

export default function DrinkCard({ drink } : DrinkCardProps) {

  const selectRecipe = useAppStore(state => state.selectRecipe)

  return (
    <div
      className="p-8 rounded-xl bg-white/10 backdrop-blur-xl"
    >
      <div className="overflow-hidden rounded-xl">
        <img 
          src={drink.strDrinkThumb} 
          alt={`image from ${drink.strDrink}`} 
          className="rounded-xl hover:scale-110 transition-transform"
        />
      </div>

      <div>
        <h2
          className="text-white font-extrabold p-4 text-lg truncate"
        >{drink.strDrink}</h2>
        <button
          className="text-white p-3 w-full rounded-xl font-bold uppercase 
                     bg-white/5 backdrop-blur-xl hover:bg-white/30 hover:cursor-pointer"
          onClick={() => selectRecipe(drink.idDrink)}
        >Show Recipe
        </button>
      </div>
    </div>
  )
}
