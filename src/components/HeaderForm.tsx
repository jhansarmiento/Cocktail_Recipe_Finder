import { useAppStore } from "../stores/useAppStore";

export default function HeaderForm() {

    const categories = useAppStore(state => state.categories)
    
  return (
    <form className="md:w-1/2 2xl:w-1/3 my-10 p-10 rounded-xl space-y-6 backdrop-blur-xl">
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
          className="focus:outline-none bg-white/40 backdrop-blur-lg p-3 rounded-lg w-full"
        />
        <label
          htmlFor="category"
          className="block text-white font-extrabold uppercase"
        >
          Category
        </label>
        <select
          name="category"
          id="category"
          className="focus:outline-none bg-white/40 backdrop-blur-lg p-3 rounded-lg w-full"
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
