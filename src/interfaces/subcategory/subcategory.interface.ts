export interface BaseSubCategory {
    name: string
    use: number
    use_measure: string
    ef: number
    ef_measure: string
    category_id: number
}
  
export interface SubCategory extends BaseSubCategory {
    id: number;
}