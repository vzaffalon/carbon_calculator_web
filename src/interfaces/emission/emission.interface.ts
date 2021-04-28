import { CategoriesEmissions } from "./categories.emissions.interface";

export interface Emission {
    total_emission: number
	total_emission_measure: string
    categories_emissions: CategoriesEmissions
}