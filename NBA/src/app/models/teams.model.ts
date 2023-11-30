export interface Squadre {
    data: Teams[]
    meta: Meta
  }
  
  export interface Teams {
    id: number
    abbreviation: string
    city: string
    conference: string
    division: string
    full_name: string
    name: string
  }
  
  export interface Meta {
    total_pages: number
    current_page: number
    next_page: number
    per_page: number
    total_count: number
  }
  