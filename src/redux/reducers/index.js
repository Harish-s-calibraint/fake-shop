import { combineReducers } from "redux";
import { productReducer , SelectedProductReducer} from "./productReducer";

const reducers = combineReducers({
    allProducts: productReducer, 
    product:SelectedProductReducer,
    //Key , value pair
});

export default reducers;