
import * as Types from "../constants/actionsTypes"

const initialState = []

const productSuggestionToday = (state = initialState, action) => {
    switch (action.type) {
        case Types.ACT_FETCH_PRODUCT_SUGGETION_TODAY:
            state = action.products
            return [...state]
        default:
            return [...state]
    }
}

export default productSuggestionToday