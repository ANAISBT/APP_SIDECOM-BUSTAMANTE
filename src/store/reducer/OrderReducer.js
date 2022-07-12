import { orderTypes } from "../types/OrderTypes";

const {GET_ORDERS,DELETE_ORDER}=orderTypes;

const initialState={
    orders:[],
}

const orderReducer = (state = initialState,action)=>{
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter((orders) => orders.id !== action.orderId),
      };
    default:
      return state;
  }
};

export default orderReducer;