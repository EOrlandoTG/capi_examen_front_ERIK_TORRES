/*export interface User {
    id?: number;
    name: string;
    description: string;
    genre: string;
    year: number;
    duration: string;
    created_at?: string;
    updated_at?: string;
}*/

/*export interface User {
    id?: number;
    address: string;
    number: number;
    district: string;
    zip: string;
    city: string;
    created_at?: string;
    updated_at?: string;
}*/

export interface User {
    name: string;
    //birthdate: string;
    age: number;
    address: string;
    created_at?: string;
    updated_at?: string;
}
