import { URL_API } from "../../constans/data/firebase";
import { cartTypes } from "../types/CartTypes";

const{ADD_TO_CART, CONFIRM_CART, REMOVE_ITEM} = cartTypes;

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    item:product,
});

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    itemId:id,
});

export const confirmCart = (cart,total) => {
   return async (dispatch)=>{
    try{
        const response =await fetch(`${URL_API}/orders.json`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                date: Date.now(),
                items: cart,
                total,
            }),
        });
        const result =await response.json();
        console.log(result);
        dispatch({
            type:CONFIRM_CART,
            confirm:true,
        });
    }catch(error){
        console.log(error);
    }
   };
};