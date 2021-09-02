import { combineReducers } from "redux";
import products from './products'
import historySearch from "./historySearch";
import sliders from "./sliders"
import productCategory from "./productCategory";
import productSuggestionToday from "./productSuggestionToday";
import product from "./product"
import cart from "./cart";

const myReducers = combineReducers({
    products,
    historySearch,
    sliders,
    productCategory,
    productSuggestionToday,
    product,
    cart,
})

export default myReducers