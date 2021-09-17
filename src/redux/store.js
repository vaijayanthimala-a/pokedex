import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() --> we added this to support the redux dev tool don't forgot to remove in production
export default store;