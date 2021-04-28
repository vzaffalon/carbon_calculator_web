import { Category } from "../category/category.interface";

export interface CategoryEmission {
    category: Category
	total_emission: number
	total_emission_measure: string
}