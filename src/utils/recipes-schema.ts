import { z } from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkApiResponseSchema = z.object({
    strDrink : z.string(),
    strDrinkThumb : z.string(),
    idDrink : z.string()
})

export const DrinksAPIResponseSchema = z.object({
    drinks: z.array(DrinkApiResponseSchema)
})

export const RecipeAPIResponseSchema = z.object({
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strIngredient7: z.string().nullable(),
    strIngredient8: z.string().nullable(),
    strIngredient9: z.string().nullable(),
    strIngredient10: z.string().nullable(),
    strMeasure1: z.string(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
    strMeasure7: z.string().nullable(),
    strMeasure8: z.string().nullable(),
    strMeasure9: z.string().nullable(),
    strMeasure10: z.string().nullable()
})