import { useAppStore } from "../stores/useAppStore";
import { useState, type ChangeEvent, type FormEvent } from "react";

export default function HeaderForm() {

    const categories = useAppStore(state => state.categories)
    const searchRecipes = useAppStore(state => state.searchRecipes)

    const [searchFilters, setSearchFilters] = useState({
            ingredient: '',
            category: ''
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // TODO: validate function will be reusable
        if(Object.values(searchFilters).includes('')) {
            console.log('All fields are mandatory')
            return
        }

        searchRecipes(searchFilters)
    }

  return (
    <form 
        className="md:w-1/2 2xl:w-1/3 my-10 p-10 rounded-xl space-y-6 backdrop-blur-xl shadow-lg/35"
        onSubmit={handleSubmit}
    >
      <div className="space-y-4">
        <label
          htmlFor="ingredient"
          className="block text-white font-extrabold uppercase"
        >
          Name or Ingredient
        </label>
        <input
          type="text"
          id="ingredient"
          placeholder="Name or ingredient. e.g. Vodka, Tequila, coffee"
          className="focus:outline-none bg-white/40 backdrop-blur-lg p-3 rounded-lg w-full"
          name="ingredient"
          value={searchFilters.ingredient}
          onChange={handleChange}
        />
        <label
          htmlFor="category"
          className="block text-white font-extrabold uppercase"
        >
          Category
        </label>
        <select
          id="category"
          className="focus:outline-none bg-white/40 backdrop-blur-lg p-3 rounded-lg w-full"
          name="category"
          value={searchFilters.category}
          onChange={handleChange}
        >
          <option value="">-- Select a category --</option>
          {categories.drinks.map((category) => (
            <option value={category.strCategory} key={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
      </div>
      <input
        type="submit"
        value="Search Recipes"
        className="cursor-pointer w-full bg-white rounded-lg p-2 text-gray-950 uppercase font-extrabold"
      />
    </form>
  );
}
