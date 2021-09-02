
import * as Types from "../constants/actionsTypes"

const initialState = []

const productCategory = (state = initialState, action) => {
    switch (action.type) {
        case Types.ACT_FETCH_PRODUCT_CATEGORY:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default productCategory