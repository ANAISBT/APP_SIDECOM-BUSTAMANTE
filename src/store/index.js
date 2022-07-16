import {applyMiddleware, combineReducers, createStore} from 'redux';

import AuthReducer from './reducer/AuthReducer';
import CartReducer from './reducer/CartReducer';
import CategoryReducer from './reducer/CategoryReducer';
import PlaceReducer from './reducer/PlaceReducer';
import ProductsReducer from './reducer/ProductReducer';
import orderReducer from './reducer/OrderReducer';
import thunk from 'redux-thunk';

// import PlaceSlices from './PlaceSlices';





const rootReducer = combineReducers({
    products: ProductsReducer,
    category: CategoryReducer,
    cart:CartReducer,
    orders:orderReducer,
    auth:AuthReducer,
    place:PlaceReducer,
    // AGREGUÉ EL PLACEREDUCER
});

export default createStore(rootReducer,applyMiddleware(thunk));