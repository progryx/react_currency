//Импорты
import {productsAPI} from "../api/api";

// Экшены
const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_CART_OPTIONS = 'ADD_CART_OPTIONS';
const CURRENT_COUNT = 'CURRENT_COUNT';

// Экшен-криейторы
export const setProducts = (products) => ({type: SET_PRODUCTS, data: products}); // флаг подписки
export const addCartOptions = (id, count) => ({type: ADD_CART_OPTIONS, id: id, count: count}); // флаг подписки
export const currentCount = (id, count) => ({type: CURRENT_COUNT, id: id, count: count}); // флаг подписки

//Thunks (преобразователи)

export const getProducts = () => { // получить всех пользователей на странице
    // debugger;
    return (dispatch) => {
        productsAPI.getProductsData().then(data => {
            //  debugger;
            dispatch(setProducts(data.data));
        });
        // dispatch(setLoadingStatus(true));
        // usersAPI.getUsers(currentPage, pageSize).then(data => {
        //     // debugger;
        //     dispatch(setUsers(data.items));
        //     dispatch(setTotalUsers(data.totalCount));
        //     dispatch(setLoadingStatus(false));
        // });
    }
};

export const addProductCount = (id, count) => {
    debugger;
    return (dispatch) => {
        dispatch(currentCount(id, count));
    }
}

export const addToCart = (id, count) => {
    debugger;
    return (dispatch) => {
        productsAPI.addToCartData(id, count).then(data => {
            debugger;
            console.log('added!');
            productsAPI.getCurrentCart().then(data => {
                debugger;
                console.log(data.data);
            });
        });
    }
};

// Начальное значение
let initialState = {
    products: []
};


// Главная функция
const productsReducer = (state = initialState, action) => { // на входе начальное значение и входящий экшен
    switch (action.type) {
        default:
            return state; // ничего не происходит, возвращает то что пришло
        case SET_PRODUCTS: {
            // debugger;
            return {...state, products: action.data}
        }
        case CURRENT_COUNT: {
            debugger;
            return {
                ...state,
                products: state.products.map(p => {
                    if (p.id === action.id) {
                        p.count = action.count
                    }
                })
            }

            }
        }
            return state;
    };

    export default productsReducer;