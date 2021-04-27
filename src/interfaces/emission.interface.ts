export interface BaseEmission {
    name: string
    total_emission: number
	total_emission_measure: string
}
  
export interface Emission extends BaseEmission {
    id: number;
}