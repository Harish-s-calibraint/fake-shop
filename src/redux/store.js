import { createStore } from "redux";
import reducers from './reducers/index'


const store = createStore(reducers, {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// createStore takes  arguments => reducers, middleware(if needed ) and the state 

export default store;
