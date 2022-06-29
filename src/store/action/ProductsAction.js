import { productsTypes } from "../types/ProductsTypes";

const {SELECT_PRODUCT, FILTERED_PRODUCTS} = productsTypes;

export const selectedProduct =(id)=>({
    type:SELECT_PRODUCT,
    productId: id
})

export const filteredProduct =(id)=>({
    type:FILTERED_PRODUCTS,
    categoryId: id
})