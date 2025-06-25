import type { DrinkApiResponse } from "../types"


type DrinkCardProps = {
    drink: DrinkApiResponse
}

export default function DrinkCard({drink} : DrinkCardProps) {
  return (
    <>
      <h1 className="mt-2">{drink.strDrink}</h1>
    </>
  )
}
