import { cartItem } from "../../constans/data";
import { cartTypes } from "../types/CartTypes";

const{ADD_TO_CART, CONFIRM_CART, REMOVE_ITEM} = cartTypes;

const initialState={
    items: [],
    total: 0,
};

const sumTotal=(list)=>list
.map((item)=>item.quantity * item.price)
.reduce((a,b)=>a+b,0);

const CartReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            let updateCart=[];

            if(state.items.find(item=>item.id === action.item.id)){
                updateCart=state.items.map((item)=>{
                    if(item.id===action.item.id) item.quantity+=1;
                    return item;
                });
            }else{
                const item={ ...action.item, quantity:1};
                updateCart=[...state.items,item];    
            }
            return {
                ...state,
                items:updateCart,
                total:sumTotal(updateCart),
            };
        case REMOVE_ITEM:
            const filteredItems=state.items.filter((item)=>item.id!==action.itemId);
            return{
                ...state,
                items: filteredItems,
                total: sumTotal(filteredItems),
            };
        default:{
            return state;
        }
    }
};
export default CartReducer;