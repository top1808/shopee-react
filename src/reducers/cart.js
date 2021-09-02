
import * as Types from "../constants/actionsTypes"

const initialState = []

const findIndex = (products,id) => {
    return products.forEach((product,i) => {
        if (product.id === id) return i
    })
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ON_GET_CART_PRODUCT:
            state = action.products
            return state
        case Types.ON_POST_PRODUCT_TO_CART:
            state.push(action.product)
            return [...state]
        case Types.ON_DELETE_CART_PRODUCT:
            var index = findIndex(state, action.id)
            state.splice(index, 1)
            return [...state]
        default:
            return state
    }
}

export default cart;