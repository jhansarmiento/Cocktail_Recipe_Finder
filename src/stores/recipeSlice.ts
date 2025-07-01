import type { StateCreator } from 'zustand'
import { getCategories, getRecipeById, getRecipes } from '../services/RecipeService'
import type { Categories, DrinkApiResponse, DrinksApiResponse, Recipe, SearchFilter } from '../types'

export type RecipesSliceType = {
    // State
    categories: Categories,
    drinks : DrinksApiResponse
    selectedRecipe: Recipe
    modal: boolean

    // Actions
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters : SearchFilter) => Promise<void>
    selectRecipe: (id: DrinkApiResponse['idDrink']) => Promise<void>
    closeModal: () => void
}

export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    // State
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,

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
    },
    selectRecipe: async (id) => {
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe: selectedRecipe,
            modal: true,
        })
    },
    closeModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe,
        })
    }
})