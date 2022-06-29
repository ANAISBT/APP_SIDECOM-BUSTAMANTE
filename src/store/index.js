import {combineReducers, createStore} from 'redux';

import CategoryReducer from './reducer/CategoryReducer';
import ProductsReducer from './reducer/ProductReducer';

const rootReducer = combineReducers({
    products: ProductsReducer,
    category: CategoryReducer,
})

export default createStore(rootReducer);