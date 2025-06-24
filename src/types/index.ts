import { z } from 'zod'
import { CategoriesAPIResponseSchema, DrinkApiResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema } from '../utils/recipes-schema'

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>

export type SearchFilter = z.infer<typeof SearchFilterSchema>

export type DrinkApiResponse = z.infer<typeof DrinkApiResponseSchema>

export type DrinksApiResponse = z.infer<typeof DrinksAPIResponseSchema>