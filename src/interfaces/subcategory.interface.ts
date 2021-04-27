export interface BaseSubCategory {
    name: string
    use: Number
    use_measure: string
    ef: Number
    ef_measure: string
}
  
export interface SubCategory extends BaseSubCategory {
    id: number;
}