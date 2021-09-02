
import * as Types from "../constants/actionsTypes"

const initialState = {}

const product = (state = initialState, action) => {
    switch (action.type) {
        case Types.ON_GET_PRODUCT:
            state = action.products
            return state
        default:
            return state
    }
}

export default product;