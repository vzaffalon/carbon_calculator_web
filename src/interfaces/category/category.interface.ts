export interface BaseCategory {
    name: string
    us_average: number
}
  
export interface Category extends BaseCategory {
    id: number;
}