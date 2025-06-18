import { create } from 'zustand';
import { createRecipeSlice } from './recipeSlice';
import type { RecipesSliceType } from './recipeSlice';


export const useAppStore = create<RecipesSliceType>((...a) => ({
    ...createRecipeSlice(...a)
}))
