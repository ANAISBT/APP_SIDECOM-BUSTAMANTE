import {applyMiddleware, combineReducers, createStore} from 'redux';

import CartReducer from './reducer/CartReducer';
import CategoryReducer from './reducer/CategoryReducer';
import ProductsReducer from './reducer/ProductReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    products: ProductsReducer,
    category: CategoryReducer,
    cart:CartReducer,
})

export default createStore(rootReducer,applyMiddleware(thunk));