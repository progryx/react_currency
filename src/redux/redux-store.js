import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import productsReducer from "./product-reducer";

let reducers = combineReducers({ // комбинируем редюсеры, редюсер - логика компоненты
    productPage: productsReducer, // название стор.объект_данных : обработчик-редюсер
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare)); // создаем стор по комб. редюсерам и подключаем поддержку "посредника" Thunk

window.store = store;
export default store;