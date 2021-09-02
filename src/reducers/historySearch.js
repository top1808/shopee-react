
import * as Types from "../constants/actionsTypes"

const data = JSON.parse(localStorage.getItem('historySearch'))
const initialState = data ? data : []

const historySearch = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_PRODUCT:
            state.push(action.name)
            localStorage.setItem('historySearch', JSON.stringify(state));
            return [...state]
        default:
            return [...state]
    }
}

export default historySearch
