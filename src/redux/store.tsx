import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
const Store=createStore(rootReducer,applyMiddleware(thunk));
export default Store;
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch