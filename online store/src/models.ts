export interface CartsProduct{
    id: number;
    title: string;
    price: number;
    thumbnail:string;

}


export interface CartsState{
    cartsProducts:CartsProduct[];
}
export interface GlobalState{
    carts:CartsState;
} 

export interface Product extends CartsProduct{
    description:string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    images:string[];
}

export interface  ApiData{
   products:Product[];
    total: number;
    skip: number;
    limit: number;

}

