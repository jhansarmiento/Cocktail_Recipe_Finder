import type { StateCreator } from 'zustand'
import { getCategories, getRecipes } from '../services/RecipeService'
import type { Categories, DrinksApiResponse, SearchFilter } from '../types'

export type RecipesSliceType = {
    // State
    categories: Categories,
    drinks : DrinksApiResponse

    // Actions
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    // State
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },

    // Actions
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories : categories
        })
    },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks: drinks
        })
    }
})