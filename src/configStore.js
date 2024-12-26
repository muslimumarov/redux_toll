import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reduser";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from 'redux-logger';

const logger = createLogger(); // Logger'ni yarating
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(logger)) // Middleware'larni qo‘shing
);

export default store;
