import { createStore, combineReducers } from "redux";
import cartReducer from "../actions/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
