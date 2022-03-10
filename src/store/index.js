import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AuthReducer from './reducers/auth.reducer';
import LibroReducer from './reducers/libro.reducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    libros: LibroReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));