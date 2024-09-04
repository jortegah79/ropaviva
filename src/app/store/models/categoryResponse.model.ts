export interface Category {
    id:         number;
    name:       string;
    image:      string;
    creationAt: Date;
    updatedAt:  Date;
}


export enum NameCategory {
    ClothesNew = "ClothesNew",
    Electronics = "Electronics",
    Furniture = "Furniture",
    Miscellaneous = "Miscellaneous",
    Shoes = "Shoes",
}
